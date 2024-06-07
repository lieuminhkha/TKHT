import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdEventSeat } from "react-icons/md";

const SeatPage: React.FC = () => {
  const [indexSelectSeat, setIndexSeat] = useState<number>(-1);
  const [rowSelect, setRowSelect] = useState<string>("");
  const handleSeatSelect = (index: number, row: string) => {
    console.log(row);
    console.log(index);
    if (indexSelectSeat === index) {
      setIndexSeat(-1);
      setRowSelect("");
    } else {
      setIndexSeat(index);
      setRowSelect(row);
    }
  };
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const seatsPerRow = 19;
  const navigate = useNavigate();

  const isVIPSeat = (row: string, seatIndex: number) => {
    return row >= "D" && row <= "J" && seatIndex >= 3 && seatIndex <= 17;
  };

  const renderSeatsForRowK = () => {
    const numPairs = 5; // Số cặp ghế đôi
    const numSeatsPerPair = 2; // Số ghế trong mỗi cặp
    const totalSeats = numPairs * numSeatsPerPair;
    const numEmptyCellsBefore = Math.floor((seatsPerRow - totalSeats) / 2);
    const numEmptyCellsAfter = seatsPerRow - totalSeats - numEmptyCellsBefore;

    const seats = [];

    for (let i = 0; i < seatsPerRow; i++) {
      if (i < numEmptyCellsBefore || i >= seatsPerRow - numEmptyCellsAfter) {
        seats.push(<td key={i}></td>);
      } else {
        const pairIndex = Math.floor(
          (i - numEmptyCellsBefore) / numSeatsPerPair
        );
        if ((i - numEmptyCellsBefore) % numSeatsPerPair === 0) {
          seats.push(
            <td key={i} colSpan={2} className="text-center">
              <div
                onClick={() => {
                  handleSeatSelect(pairIndex, "K");
                }}
              >
                <Link to="#">
                  <MdEventSeat
                    className="mx-1 inline-block"
                    color={
                      indexSelectSeat === pairIndex && rowSelect === "K"
                        ? "#65D20F"
                        : "#0F89D2"
                    }
                  />
                  <MdEventSeat
                    className="mx-1 inline-block"
                    color={
                      indexSelectSeat === pairIndex && rowSelect === "K"
                        ? "#65D20F"
                        : "#0F89D2"
                    }
                  />
                </Link>
              </div>
            </td>
          );
        }
      }
    }

    return seats;
  };

  return (
    <div>
      <div className="text-black text-2xl font-semibold text-center mb-10 flex items-center justify-between">
        <div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              navigate("/booking");
            }}
          />
        </div>
        <h1>Bước 2 : Chọn ghế</h1>
      </div>
      <div className="p-5 flex items-start gap-2">
        <div className="w-3/5">
          <div className="mb-5 flex justify-between">
            <div className="text-black flex items-center gap-1">
              <h2>Ghế thường</h2>
              <div>
                <MdEventSeat className="mx-1" color="#fff" />
              </div>
            </div>
            <div className="text-[#FFF333] flex items-center gap-1">
              <h2>Ghế Vip</h2>
              <div>
                <MdEventSeat className="mx-1" color="#FFF333" />
              </div>
            </div>
            <div className="text-[#0F89D2] flex items-center gap-1">
              <h2>Ghế đôi</h2>
              <div>
                <MdEventSeat className="mx-1" color="#0F89D2" />
              </div>
            </div>
            <div className="text-[#D20F88] flex items-center gap-1">
              <h2>Ghế đã bán</h2>
              <div>
                <MdEventSeat className="mx-1" color="#D20F88" />
              </div>
            </div>
            <div className="text-[#65D20F] flex items-center gap-1">
              <h2>Ghế được chọn</h2>
              <div>
                <MdEventSeat className="mx-1" color="#65D20F" />
              </div>
            </div>
          </div>
          <table className="w-full">
            <tbody className="text-black">
              {rows.map((row, rowIndex) => (
                <>
                  {row === "K" && (
                    <tr
                      key={`${rowIndex}-spacer`}
                      style={{ height: "20px" }}
                    ></tr>
                  )}
                  <tr key={rowIndex}>
                    <td>{row}</td>
                    {row === "K" ? (
                      <>{renderSeatsForRowK()}</>
                    ) : (
                      [...Array(seatsPerRow)].map((_, seatIndex) => (
                        <td
                          key={`${row}${seatIndex}`} // Sử dụng `row` và `seatIndex` để tạo key duy nhất
                          onClick={() => {
                            handleSeatSelect(seatIndex, row);
                          }}
                        >
                          <div>
                            <Link to="#">
                              <MdEventSeat
                                style={{
                                  color:
                                    indexSelectSeat === seatIndex &&
                                      rowSelect === row
                                      ? "#65D20F" // Ghế được chọn
                                      : isVIPSeat(row, seatIndex)
                                        ? "#FFF333" // Ghế VIP
                                        : "white", // Ghế thường
                                }}
                              />
                            </Link>
                          </div>
                        </td>
                      ))
                    )}
                    <td>{row}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-2/5">
          <div className="border border-solid border-[#454D6A] py-5 rounded-2xl text-black w-4/5 mx-auto">
            <div className="border-b border-solid border-[#454D6A] px-5 pb-5">
              <h2 className="font-bold text-[16px] pb-1">BHD Star Pham Hung</h2>
              <h3>30/05/2024 - Suất chiếu : 17:00</h3>
            </div>
            <div className="border-b border-solid border-[#454D6A] p-5">
              <h2 className="font-bold text-xl  text-[#65D20F]">Doraemon</h2>
              <div>
                <span className="border border-solid border-[#FFD600] inline-block  leading-5 rounded text-center p-1 my-2 mr-2 ">
                  Phụ đề
                </span>
                <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block  leading-5 rounded text-center px-1 my-2 mr-2">
                  2D
                </span>
              </div>
            </div>
            {indexSelectSeat < 0 ? (
              <div className="p-5">
                <p className="font-bold text-xl  text-black">
                  Bạn chưa chọn ghế
                </p>
              </div>
            ) : (
              <div>
                <div className="p-5 flex item-center justify-between">
                  <h2 className="font-bold text-xl  text-black">Tổng tiền</h2>
                  <p className="font-bold text-xl  text-black">90.000 đồng</p>
                </div>
                <div className="w-4/5 mx-auto text-center text-xl text-black bg-[#65D20F] rounded-sm  py-2 mt-3">
                  <button>Thanh toán</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatPage;
