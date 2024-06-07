import { format, startOfDay } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import CustomDatePicker from './ui/CustomDatePicker';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import MovieSession from './TheaterShowtimes';
import TheaterShowtimes from './TheaterShowtimes';
import ShowtimeMetadata from './ui/ShowtimeMetadata';

function BookingComponent() {
    const [theaters, setTheaters] = useState([]);
    const [movies, setMovies] = useState([]);
    const [showtimes, setShowtimes] = useState({} as any);

    const [selectedDate, setSelectedDate] = useState(0);
    const [selectedCinema, setSelectedCinema] = useState({} as any);
    const [selectedMovie, setSelectedMovie] = useState({} as any);

    const isObjectEmpty = useCallback((object: any) => {
        return Object.keys(object).length === 0;
    }, []);

    useEffect(() => {
        const getShowtimes = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/theaters/${selectedCinema.id}/movies/${selectedMovie.id}/showtimes`, {
                    params: {
                        request_time: selectedDate,
                    },
                });

                setShowtimes({ theater: response.data.theater, showtimeList: response.data.showtime_list });
            } catch (e) {
                if (!axios.isAxiosError(e)) {
                    throw e;
                }
                toast.error('Có lỗi xảy ra khi fetch dữ liệu!');
                switch (e.response?.status) {
                    case 401:
                        toast.error("chua dang nhap may oi");
                        break;
                    default:
                        console.error('Error fetching data:', e);
                        throw e;
                }
            }
        };
        if (selectedDate && (selectedCinema && !isObjectEmpty(selectedCinema)) && (selectedMovie && !isObjectEmpty(selectedMovie))) {
            getShowtimes();
        }

        const getMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/movies/current-showing?limit=5&offset=0');

                fetch('http://localhost:8080/api/sessions/password', {
                    method: 'POST',
                    credentials: 'include', // Bao gồm cookie trong yêu cầu
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: "halerquinz",
                        password: "toilaadmin"
                    }),
                });

                setMovies(response.data.current_showing_movie_list);
            } catch (e) {
                if (!axios.isAxiosError(e)) {
                    throw e;
                }
                toast.error('Có lỗi xảy ra khi fetch dữ liệu!');
                switch (e.response?.status) {
                    case 401:
                        toast.error("chua dang nhap may oi");
                        break;
                    default:
                        console.error('Error fetching data:', e);
                        throw e;
                }
            }
        };

        const getTheaters = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/theaters');
                setTheaters(response.data.theater_list);
            } catch (e) {
                if (!axios.isAxiosError(e)) {
                    throw e;
                }
                toast.error('Có lỗi xảy ra khi fetch dữ liệu!');
                switch (e.response?.status) {
                    case 401:
                        toast.error("chua dang nhap may oi");
                        break;
                    default:
                        console.error('Error fetching data:', e);
                        throw e;
                }
            }
        };


        getMovies();
        getTheaters();
    }, [selectedDate, selectedCinema, selectedMovie, isObjectEmpty]);

    return (
        <div style={{ padding: '20px' }}>
            <div className='text-black text-xl font-semibold'>Chọn Ngày</div>
            <CustomDatePicker onSelect={setSelectedDate} />

            <div className='text-black text-xl font-semibold'>Chọn Rạp</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {theaters.map((theater: any) => (
                    <button key={theater.id} onClick={() => setSelectedCinema({ id: theater.id, displayName: theater.display_name })}>
                        {theater.display_name}
                    </button>
                ))}
                {!selectedCinema && <p>Vui lòng chọn rạp</p>}
            </div>

            <div className='text-black text-xl font-semibold'>Chọn Phim</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {movies.map((movie: any) => (
                    <button key={movie.id} onClick={() => setSelectedMovie({ id: movie.id, title: movie.title })}>
                        {movie.title}
                    </button>
                ))}
                {!selectedMovie && <p>Vui lòng chọn phim</p>}
            </div>

            <h3>Lựa Chọn Của Bạn</h3>

            <p>Ngày: {selectedDate ? format(selectedDate, 'PPP') : 'Chưa chọn'}</p>
            <p>Rạp: {selectedCinema.displayName}</p>
            <p>Phim: {selectedMovie.title}</p>
            {(showtimes && !isObjectEmpty(showtimes)) &&
                <TheaterShowtimes theater={showtimes?.theater} showtimeList={showtimes?.showtimeList} />
            }
            < ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}

export default BookingComponent;
