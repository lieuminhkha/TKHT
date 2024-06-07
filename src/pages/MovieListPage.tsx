import { CurrentShowingMovieList } from "@/components/CurrentShowingMovieList";
import { useParams } from "react-router-dom";
import landingPageImage from '../assets/landing.png';
import appDownloadImage from "../assets/appDownload.png";

const MovieListPage = () => {
    const { status } = useParams();
    return (
        <div className="flex flex-col gap-10">
            {+ status! === 0 ? <CurrentShowingMovieList /> : <div></div>}
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

export default MovieListPage;