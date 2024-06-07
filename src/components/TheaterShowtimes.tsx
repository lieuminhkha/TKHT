import { unixToHourTime } from '@/lib/utils';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function TheaterShowtimes({ showtimeList, theater, onClick }: any) {
    const navigate = useNavigate();

    // const unixToHourTime = useCallback((timestamp: number) => {
    //     const date = new Date(timestamp);

    //     // Lấy giờ và phút
    //     let hours: number | string = date.getHours();
    //     let minutes: number | string = date.getMinutes();

    //     // Định dạng lại để đảm bảo rằng giờ và phút luôn có hai chữ số
    //     hours = hours < 10 ? '0' + hours : hours;
    //     minutes = minutes < 10 ? '0' + minutes : minutes;

    //     // Xuất kết quả dưới dạng chuỗi giờ:phút
    //     return hours + ':' + minutes;
    // }, []);

    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <div className='flex items-center bg-secondary rounded-sm p-5 text-2xl font-bold'>
                <h2 className="text-lg font-semibold">{showtimeList[0].movie_name}</h2>
            </div>
            <div className='w-full flex flex-col mt-5 gap-y-5 ml-5'>
                <div className="text-sm font-semibold">{theater.display_name} </div>
                <div className="text-sm font-semibold">{showtimeList[0].movie_type.display_name} </div>
                <div className='w-full flex'>
                    {showtimeList.map((showtime: any, index: any) => (
                        <div style={{ width: '115px', height: '100' }} key={index} onClick={() => navigate(`/showtime/${showtime.id}`)} className="flex flex-col items-center text-gray-600 border-2 border-gray-100 hover:cursor-pointer hover:bg-black hover:text-white">
                            <div className="w-full text-xs px-3 py-1 border-b-2 border-gray-100 text-center">{showtime.screen_name}</div>
                            <div className="w-full text-sm font-bold border-b-2 border-gray-100 py-5 text-center">{unixToHourTime(showtime.time_start)}-{unixToHourTime(showtime.time_end)}</div>
                            <div className="w-full text-xs font-medium text-center"> {showtime.seat_count} Ghế ngồi</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TheaterShowtimes;
