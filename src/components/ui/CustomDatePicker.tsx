import React from 'react';
import { format, startOfDay, addDays, isSameDay } from 'date-fns';

const CustomDatePicker = ({ onSelect }: any) => {
  const today = startOfDay(new Date());
  const days = Array.from({ length: 7 }).map((_, index) => addDays(today, index));

  const handleSelect = (day: Date) => {
    let timestamp;
    if (isSameDay(day, new Date())) {
      timestamp = Date.now();
    } else {
      timestamp = day.getTime();
    }
    onSelect(timestamp);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
      {days.map(day => (
        <button key={day.getTime()} onClick={() => handleSelect(day)} style={{ padding: '10px', cursor: 'pointer' }}>
          {format(day, 'EEEE, dd/MM')}
        </button>
      ))}
    </div>
  );
};

export default CustomDatePicker;
