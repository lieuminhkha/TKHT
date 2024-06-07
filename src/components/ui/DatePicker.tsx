import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../../css/DatePicker.css'; // Đảm bảo bạn đã tạo file CSS này

const DatePicker = ({ onSelectedDate }: any) => {
    const [currentDate, setCurrentDate] = useState(moment());
    const [days, setDays] = useState([]);

    useEffect(() => {
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            weekDays.push(moment().add(i, 'days'));
        }
        setDays(weekDays as any);
    }, []);

    const selectDate = (date: any) => {
        setCurrentDate(date);
    };

    return (
        <div className="date-picker">
            {days.map((day: any, index) => (
                <div
                    key={index}
                    className={`date-item ${day.isSame(currentDate, 'day') ? 'selected' : ''}`}
                    onClick={onSelectedDate}
                >
                    <div className="day-of-week">{day.format('dd')}</div>
                    <div className="date-number">{day.date()}</div>
                </div>
            ))}
        </div>
    );
};

export default DatePicker;