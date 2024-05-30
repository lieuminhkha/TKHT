import React from "react";

function SeatMap() {
  // Tạo một mảng 2 chiều để lưu trữ dãy ghế
  const seatRows = [
    Array.from({ length: 19 }, (_, index) => index + 1), // Dãy A
    Array.from({ length: 19 }, (_, index) => index + 20), // Dãy B
    Array.from({ length: 19 }, (_, index) => index + 39), // Dãy C
    Array.from({ length: 19 }, (_, index) => index + 58), // Dãy D
    Array.from({ length: 19 }, (_, index) => index + 77), // Dãy E
    Array.from({ length: 19 }, (_, index) => index + 96), // Dãy F
    Array.from({ length: 19 }, (_, index) => index + 120), // Dãy G
    Array.from({ length: 19 }, (_, index) => index + 150), // Dãy H
    Array.from({ length: 19 }, (_, index) => index + 180), // Dãy I
    Array.from({ length: 19 }, (_, index) => index + 210), // Dãy J
    Array.from({ length: 19 }, (_, index) => index + 240), // Dãy K
  ];

  return (
    <div>
      <h2>Rạp chiếu phim</h2>
      <div className="seat-map">
        {seatRows.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seatNumber) => (
              <div key={seatNumber} className="seat">
                {seatNumber}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatMap;
