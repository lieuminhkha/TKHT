import landingPageImage from '../assets/landing.png';
import appDownloadImage from "../assets/appDownload.png";
import MovieList from '@/components/MovieList';
import { fakeMovies } from '../fake-data/MovieList';
import MoviesNow from '@/components/MoviesNow';
import PreSaleTicket from '@/components/PreSaleTicket';
import MoviesComingSoon from '@/components/MoviesComingSoon';
import SlideShow from '@/components/SlideShow';
import MovieCarousel from '@/components/MovieCarousel';
import { CurrentShowingMovieList } from '@/components/CurrentShowingMovieList';
import CinemaSelector from '@/components/ui/CinemaSelector';
import BookingComponent from '@/components/BookingComponent';
import EventsPage from './EventsPage';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <SlideShow />
      <div className='bg-secondary rounded-lg shadow-md py-8 flex flex-col gap-5 text-center '>
        <h1 className='text-xl font-bold tracking-tight text-primary'>
          Đặt vé xem phim với giá rẻ nhất tại đây
        </h1>
      </div>
      {/* <MovieCarousel /> */}
      <CurrentShowingMovieList />
      {/* <CinemaSelector /> */}
      {/* <BookingComponent /> */}
      <EventsPage />

      {/* <PreSaleTicket movies={fakeMovies} /> */}
      <hr />
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingPageImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className='font-bold text-3xl tracking-tighter text-black'>
            Đặt vé siêu nhanh
          </span>
          <span className='text-primary'>
            Tải xuống Ứng dụng SIUUU để nhận nhiều ưu đãi hơn
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
