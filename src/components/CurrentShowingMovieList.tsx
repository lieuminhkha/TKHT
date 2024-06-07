import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./ui/NewMovieCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const CurrentShowingMovieList: React.FC = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/movies/current-showing?limit=5&offset=0');
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

        getMovies();
    }, []); // 
    return (
        <div className="flex justify-center gap-5">
            {movies.map((item: any) => (
                <MovieCard key={item} {...item} onClick={() => navigate(`/movie/${item.id}`)} />
            ))}
            < ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div >
    );
};