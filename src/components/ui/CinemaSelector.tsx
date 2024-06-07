import React, { useState } from 'react';
import { Select, List, Typography } from 'antd';
import moment from 'moment';

const { Option } = Select;

const CinemaSelector = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedCinema, setSelectedCinema] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const cinemas = [
        { id: 'tphcm', name: 'TPHCM', number: 9 },
        { id: 'hanoi', name: 'Hà Nội', number: 4 },
    ];

    const movies = [
        { id: 'doraemon', title: 'Doraemon: Nobita và Bản Giao Hưởng Màu Cầu Vồng' },
        { id: 'ngoidenkyquai4', title: 'Ngôi Đền Kỳ Quái 4' },
    ];

    return (
        <div>
            <DatePicker onSelectDate={setSelectedDate} />
            <Select
                placeholder="Vui lòng chọn rạp chiếu"
                onChange={setSelectedCinema}
                style={{ width: 200 }}
            >
                {cinemas.map(cinema => (
                    <Option key={cinema.id} value={cinema.id}>{cinema.name} ({cinema.number})</Option>
                ))}
            </Select>
            <List
                header={<div>Phim</div>}
                bordered
                dataSource={movies}
                renderItem={(item: any) => (
                    <List.Item onClick={() => setSelectedMovie(item.id)}>
                        <Typography.Text mark>{item.id === selectedMovie ? 'Chosen' : ''}</Typography.Text> {item.title}
                    </List.Item>
                )}
            />
            <div>
                Ngày chọn: {selectedDate.format('DD/MM/YYYY')}
                <br />
                Rạp chọn: {selectedCinema}
                <br />
                Phim chọn: {selectedMovie}
            </div>
        </div>
    );
};

export default CinemaSelector;
