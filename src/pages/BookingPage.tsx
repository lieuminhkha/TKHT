import React from "react";
import DatePicker from "../components/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const BookingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-white text-2xl font-semibold text-center mb-10 flex items-center justify-between">
        <h1>Bước 1 : Chọn thời gian và địa điểm</h1>
        <div className="pr-5">
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => {
              navigate("/seat");
            }}
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="border border-solid border-[#454D6A] w-1/5 rounded-2xl p-3 h-[50px]">
          <DatePicker />
        </div>
        <div className="border border-solid border-[#454D6A] w-4/5 rounded-2xl ">
          <div className="p-4">
            <div className="border border-solid border-[#454D6A] p-5 rounded-2xl text-white">
              <h2 className="font-bold text-xl">BHD Star Pham Hung</h2>
              <h3>
                Tầng 4, TTTM Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh,
                TPHCM.
              </h3>
              <div className="grid grid-cols-5 mt-5 gap-5">
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    22:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Lồng tiếng
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="border border-solid border-[#454D6A] p-5 rounded-2xl text-white">
              <h2 className="font-bold text-xl">BHD Star Le Van Viet</h2>
              <h3>
                Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú,
                Quận 9, TP.HCM
              </h3>
              <div className="grid grid-cols-5 mt-5 gap-5">
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    17:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Phụ đề
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#454D6A] text-center p-3 rounded w-2/3 ">
                    22:00
                  </div>
                  <div>
                    <span className="border border-solid border-[#FFD600] inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      Lồng tiếng
                    </span>
                    <span className="bg-gradient-to-r from-green-400 to-green-600 inline-block h-5 leading-5 rounded text-center px-1 m-2">
                      2D
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
