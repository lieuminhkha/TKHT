import { unixToDate } from "@/lib/utils";
import { Card, Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MovieDetailPage = () => {
    const [movie, setMovie] = useState({} as any);
    const { movieId } = useParams();

    console.log(movie?.movie?.trailer?.youtube_link_url);
    useEffect(() => {
        const getMovieDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/movies/detail/${movieId}`, { withCredentials: true });
                setMovie(response.data);
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

        getMovieDetail();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            <Card
                hoverable
                style={{ width: '100%', height: '500px' }}
                cover={
                    <iframe
                        title="YouTube Video"
                        width={"560"}
                        height={"500"}
                        src={`https://www.youtube.com/embed/${movie?.movie?.trailer?.youtube_link_url.split('=')[1]}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                }
            />

            <div className="flex w-full">
                <div className="flex flex-row">
                    <div style={{ width: 200, height: 300 }} className="">
                        <img className="w-full h-full" src={movie?.movie?.poster?.original_image_url} alt="Movie Poster" />
                    </div>
                    <div className="px-6 py-4 flex flex-col gap-5">
                        <div className="font-bold text-2xl mb-2">{movie?.movie?.title}</div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-black font-semibold text-sm">Ngày phát hành: </div>
                            <div className="text-gray-600 text-sm">{unixToDate(movie?.movie?.release_date)} </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-black font-semibold text-sm">Thông tin cơ bản: </div>
                            <div className="text-gray-600 text-sm">{movie?.genre_list?.map((genre: any) => genre.display_name).join("/")} {movie?.movie?.duration}{`(phút)`} </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-black font-semibold text-sm">Loại: </div>
                            <div className="text-gray-600 text-sm">{movie?.movie?.movie_type?.display_name} </div>
                        </div>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                    </div>
                </div>


            </div>
            <button style={{ width: 200, height: 50, color: "#cdc197", backgroundColor: "#231f20" }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                Đặt vé
            </button>
            <div className="font-semibold text-xl mt-2">Tóm tắt</div>
            <p className="text-gray-700 text-base">
                {movie?.movie?.description}
            </p>

            <Carousel autoplay effect="fade" speed={1000}>
                {movie?.image_list?.map((image: any) => (
                    <div key={image?.id} className='bg-red w-full h-full'>
                        <img src={image?.original_image_url} alt="Movie" className='w-full h-full object-cover' />
                    </div>
                ))}
            </Carousel >
        </div>
    );

};

export default MovieDetailPage;