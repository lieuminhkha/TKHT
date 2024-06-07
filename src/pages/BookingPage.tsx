import { formatTimestampToDateAndTime, unixToDateTime, unixToHourTime } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const BookingPage = () => {
  const navigate = useNavigate();
  const { status } = useParams();

  const [bookingList, setBookingList] = useState([] as any);

  const createPaymentTransaction = async (bookingId: number) => {
    const response = await axios.post(`http://localhost:8080/api/sessions/user/bookings/${bookingId}/payment-transaction`, {}, { withCredentials: true });
    window.location.href = response.data.url;
  };

  const cancelPaymentTransaction = async (bookingId: number) => {
    const response = await axios.delete(`http://localhost:8080/api/sessions/user/bookings/${bookingId}/payment-transaction`, { withCredentials: true });
    if (response.status === 200) {
      toast.success('Huỷ thanh toán thành công!');
    }
  };


  useEffect(() => {
    const getBookingList = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/sessions/user/bookings?status=${status}&limit=5`, { withCredentials: true });
        setBookingList(response.data.booking_list);
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

    getBookingList();
  }, [status]);

  return (
    <div className="flex">
      <div className="container mx-auto px-4">
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="flex space-x-4 border-b-2 border-gray-200 mb-4">
            <button onClick={() => { navigate("/booking/0"); }} className={`pb-2 hover:text-red-500 focus:outline-none ${+status! === 0 && "border-b-2 border-red-500 text-red-500"}`}>Đang giữ chỗ</button>
            <button onClick={() => { navigate("/booking/1"); }} className={`pb-2 hover:text-red-500 focus:outline-none ${+status! === 1 && "border-b-2 border-red-500 text-red-500"}`}>Đang thanh toán</button>
            <button onClick={() => { navigate("/booking/2"); }} className={`pb-2 hover:text-red-500 focus:outline-none ${+status! === 2 && "border-b-2 border-red-500 text-red-500"}`}>Hoàn thành</button>
            <button onClick={() => { navigate("/booking/3"); }} className={`pb-2 hover:text-red-500 focus:outline-none ${+status! === 3 && "border-b-2 border-red-500 text-red-500"}`}>Đã hủy</button>
          </div>
          <div className="text-center">
            {/* <img src="clipboard-icon.png" alt="No Orders" class="mx-auto mb-4" style="width: 50px; height: 50px;"> <!-- Ensure the path to your image is correct --> */}
            {bookingList ?
              bookingList.map((booking: any) => (
                <div style={{ backgroundColor: "#555555" }} className='w-full text-center p-2 bg-gray-200 text-sm font-medium flex justify-between mb-2'>
                  <div className='flex flex-col w-80 items-start gap-2'>
                    <div style={{ color: "#cdc197" }}>Phim chiếu rạp</div>
                    <div className='flex' >
                      <div>
                        <img src={booking.movie.poster.original_image_url} className='w-30 h-40' />

                        {/* {movie.poster.original_image_url ? <img src={movie.poster.original_image_url} className='w-30 h-40' /> : <div></div>} */}
                      </div>
                      <div className='text-white w-40 text-balance'>{booking.movie.title}</div>

                    </div>
                  </div>
                  <div className='flex flex-col w-80 items-start gap-2 justify-between'>
                    <div style={{ color: "#cdc197" }}>Thông tin vé đặt</div>
                    <div className='flex'>
                      <div className='w-60 flex justify-between'>
                        <div className='text-gray-300'>Ngày</div>
                        <div className='text-white'>{unixToDateTime(booking.showtime.time_start)}</div>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-60 flex justify-between'>
                        <div className='text-gray-300'>Giờ chiếu</div>
                        <div className='text-white'>{unixToHourTime(booking.showtime.time_start)}-{unixToHourTime(booking.showtime.time_end)}</div>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-60 flex justify-between'>
                        <div className='text-gray-300 mr-2'>Rạp chiếu</div>
                        <div className='text-white'>{booking.theater.display_name}, {booking.screen.display_name}</div>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-60 flex justify-between'>
                        <div className='text-gray-300 mr-2'>Ghế ngồi</div>
                        <div className='text-white'>{booking.seat.no}</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-80 items-start gap-2'  >
                    <div className='' style={{ color: "#cdc197" }}>Tổng tiền đơn hàng</div>
                    <div className='flex flex-col'>
                      <div className='w-80 flex justify-between'>
                        <div className='text-gray-300'>Thành tiền</div>
                        <div className='text-white'>{booking.booking.amount}đ</div>
                      </div>
                      <div className='w-80 flex justify-between'>
                        <div className='text-gray-300'>Thời gian đặt</div>
                        <div className='text-white'>{formatTimestampToDateAndTime(booking.booking.booking_time)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end text-white">
                    {+status! === 1 &&
                      <button style={{ width: 100, height: 50, color: "#cdc197", backgroundColor: "#231f20" }} onClick={() => { cancelPaymentTransaction(booking.booking.id); }} className="p-1 mr-2">
                        Huỷ
                      </button>}
                    {(+status! === 0 || +status! === 1) &&
                      <button style={{ width: 100, height: 50, color: "#cdc197", backgroundColor: "#231f20" }} onClick={() => { createPaymentTransaction(booking.booking.id); }} className="p-3">
                        Thanh toán
                      </button>}
                  </div>
                </div>
              )) : <p className="text-gray-700">Chưa có đơn hàng</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-48 bg-gray-400">
        <h3>Halerquinz</h3>
      </div>
      < ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div >
  );
};


export default BookingPage;
