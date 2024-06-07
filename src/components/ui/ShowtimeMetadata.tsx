import React, { useEffect, useState } from 'react';
import { format, startOfDay, addDays, isSameDay } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';

const ShowtimeMetadata = ({ id }: any) => {
    const [seatRowNameSet, setSeatRowNameSet] = useState(new Set<string>());
    const [seatMap, setSeatMap] = useState(new Map<string, any>());

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

    const renderSeats = () => {
        return Object.keys(seatsByRow).map(row => (
            <div key={row} className="flex gap-5">
                <div className='w-10 h-10 flex justify-center items-center'>{row}</div>
                {seatsByRow[row].map((seat: any) => (
                    <div key={seat.id} className="w-10 h-10 bg-gray-700 text-white text-sm flex justify-center items-center hover:cursor-pointer">
                        {seat.column}
                    </div>
                ))}
            </div>
        ));
    };

    useEffect(() => {
        const getShowtimeMetadata = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/showtimes/${id}`, {
                },);
                // for (const seat of response.data.seats) {
                //     seatRowNameSet.add(seat.row);
                // }
                // setShowtimes({ theater: response.data.theater, showtimeList: response.data.showtime_list });
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
        <div className='flex flex-col gap-2'> {renderSeats()} </div>
    );
};

export default ShowtimeMetadata;
