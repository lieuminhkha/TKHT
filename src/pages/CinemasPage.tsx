import landingPageImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import MovieList from "@/components/MovieList";
import { fakeShows } from "../fake-data/Show";
import MoviesNow from "@/components/MoviesNow";
import PreSaleTicket from "@/components/PreSaleTicket";
import MoviesComingSoon from "@/components/MoviesComingSoon";
import CinemaCard from "@/components/CinemaCard";

const CinemasPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="w-full">
          <div className="py-5">
            <div className="mx-auto w-4/5 text-center text-black text-2xl font-bold">
              <h1>Hệ thống rạp</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {fakeShows.map((item, index) => (
            <CinemaCard key={index} show={item} />
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 bg-[#000000]">
        <img src={landingPageImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter text-black">
            Đặt vé siêu nhanh
          </span>
          <span className="text-orange-700">
            Tải xuống Ứng dụng SIUUU để nhận nhiều ưu đãi hơn
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default CinemasPage;
