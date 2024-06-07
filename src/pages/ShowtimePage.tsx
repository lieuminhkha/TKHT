import React, { useEffect, useState } from 'react';
import { format, startOfDay, addDays, isSameDay } from 'date-fns';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { unixToDateTime, unixToHourTime } from '@/lib/utils';

const ShowtimePage: React.FC = () => {
    const navigate = useNavigate();
    const { showtimeId } = useParams();

    const [theater, setTheater] = useState({} as any);
    const [showtime, setShowtime] = useState({} as any);
    const [movie, setMovie] = useState({} as any);
    const [screen, setScreen] = useState({} as any);

    const [selectedSeat, setSelectedSeat] = useState({} as any);

    const [seatsByRow, setSeatsByRow] = useState({} as any);
    const organizeSeats = (seats: any) => {
        const seatsByRowTemp = {} as any;
        seats.forEach((seat: any) => {
            if (!seatsByRowTemp[seat.row]) {
                seatsByRowTemp[seat.row] = [];
            }
            seatsByRowTemp[seat.row].push(seat);
        });

        for (const row in seatsByRowTemp) {
            seatsByRowTemp[row].sort((a: any, b: any) => a.column - b.column);
        }

        setSeatsByRow(seatsByRowTemp);
    };

    const handleBooking = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/api/showtimes/${showtimeId}/bookings`, {
                amount: +selectedSeat.price,
                seat_id: selectedSeat.id
            }, { withCredentials: true });
            if (response.status === 200) {
                navigate("/booking/0");
            }
        } catch (e) {
            if (!axios.isAxiosError(e)) {
                throw e;
            }
            switch (e.response?.status) {
                case 401:
                    toast.error("chua dang nhap may oi");
                    break;
                case 409:
                    toast.error("Chỗ này hiện đã đặt");
                    break;
                default:
                    console.error('Error fetching data:', e);
                    throw e;
            }
        }
    };

    const renderSeats = () => {
        return Object.keys(seatsByRow).map(row => (
            <div key={row} className="flex gap-5">
                <div className='w-10 h-10 flex justify-center items-center'>{row}</div>
                {seatsByRow[row].map((seat: any) => (
                    <div
                        onClick={() => setSelectedSeat(seat)}
                        style={{
                            backgroundColor: selectedSeat.id === seat.id ? "black" : (seat.status !== 0 ? '#E9E9E9' :
                                seat.seat_type.id === 1 ? 'gray' : 'orange'),
                            pointerEvents: seat.status !== 0 ? 'none' : 'auto',
                            opacity: seat.status !== 0 ? 0.5 : 1
                        }} key={seat.id} className="w-10 h-10 bg-gray-700 text-white text-sm flex justify-center items-center hover:cursor-pointer">
                        {seat.column}

                    </div>
                ))}
            </div>
        ));
    };

    useEffect(() => {
        const getShowtimeMetadata = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/showtimes/${showtimeId}`, {
                });
                setTheater(response.data.theater);
                setShowtime(response.data.showtime);
                setMovie(response.data.movie);
                setScreen(response.data.screen);
                organizeSeats(response.data.seats);
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

        getShowtimeMetadata();
    }, []);

    return (
        <div className="container mx-auto flex-1 py-10 bg-white">
            <div className='flex flex-col gap-5'>
                <div className='w-full text-left p-2 text-2xl font-bold'>Chọn ghế</div>
                <div className='w-full text-center p-2 bg-gray-200 text-xl font-medium'>Screen</div>
                <div className='flex flex-col gap-2 justify-center items-center'> {renderSeats()} </div>
                <div className='flex justify-end gap-2 mt-5'>
                    <div className='flex gap-2'>
                        <div style={{ backgroundColor: "black" }} className='w-5 h-5'></div>
                        <div>Ghế đang chọn</div>
                    </div>
                    <div className='flex gap-2'>
                        <div style={{ backgroundColor: "gray" }} className='w-5 h-5'></div>
                        <div>Ghế thường</div>
                    </div>
                    <div className='flex gap-2'>
                        <div style={{ backgroundColor: "orange" }} className='w-5 h-5'></div>
                        <div>Ghế vip</div>
                    </div>
                    <div className='flex gap-2'>
                        <div style={{ backgroundColor: "#E9E9E9" }} className='w-5 h-5'></div>
                        <div>Ghế đã mua</div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#555555" }} className='w-full text-center p-2 bg-gray-200 text-sm font-medium flex justify-between'>
                    <div className='flex flex-col w-80 items-start gap-2'>
                        <div style={{ color: "#cdc197" }}>Phim chiếu rạp</div>
                        <div className='flex'>
                            <div>
                                <img src={movie?.poster?.original_image_url} className='w-30 h-40 mr-2' />

                                {/* {movie.poster.original_image_url ? <img src={movie.poster.original_image_url} className='w-30 h-40' /> : <div></div>} */}
                            </div>
                            <div className='text-white'>{movie.title}</div>

                        </div>
                    </div>
                    <div className='flex flex-col w-80 items-start gap-2 justify-between'>
                        <div style={{ color: "#cdc197" }}>Thông tin vé đặt</div>
                        <div className='flex'>
                            <div className='w-60 flex justify-between'>
                                <div className='text-gray-300'>Ngày</div>
                                <div className='text-white'>{unixToDateTime(showtime.time_start)}</div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-60 flex justify-between'>
                                <div className='text-gray-300'>Giờ chiếu</div>
                                <div className='text-white'>{unixToHourTime(showtime.time_start)}-{unixToHourTime(showtime.time_end)}</div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-60 flex justify-between'>
                                <div className='text-gray-300 mr-2'>Rạp chiếu</div>
                                <div className='text-white'>{theater.display_name}, {screen.display_name}</div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='w-60 flex justify-between'>
                                <div className='text-gray-300 mr-2'>Ghế ngồi</div>
                                {selectedSeat.no
                                    ? <div className='text-white'>{selectedSeat.no}</div>
                                    : <div className='text-white'></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-80 items-start gap-2'  >
                        <div className='' style={{ color: "#cdc197" }}>Tổng tiền đơn hàng</div>
                        <div className='flex'>
                            <div className='flex gap-10'>
                                <div className='text-gray-300'>Đặt trước phim</div>
                                {selectedSeat.price
                                    ? <div className='text-white'>{selectedSeat.price}đ</div>
                                    : <div className='text-white'>0đ</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='flex justify-end'>
                    <button onClick={() => handleBooking()}
                        style={{ width: 200, height: 50, color: "#cdc197", backgroundColor: "#231f20" }}
                        className='py-2 px-4 font-bold'>Đặt chỗ</button>
                </div>
            </div>
            < ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div >
    );
};

export default ShowtimePage;
