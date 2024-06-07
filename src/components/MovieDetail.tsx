import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import movieImage from "../assets/movieImage.jpg";
import { Movie } from "@/fake-data/MovieList";

type MovieDetailProps = {
  movie: Movie;
  isOpen: boolean;
  closeMovieDetail: () => void;
};

const MovieDetail: React.FC<MovieDetailProps> = ({
  isOpen,
  closeMovieDetail,
  movie,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeMovieDetail}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-3/4 transform overflow-hidden rounded-2xl bg-slate-800 p-8 text-left align-middle shadow-xl transition-all mx-auto my-auto">
                <Dialog.Title></Dialog.Title>
                <div className="mt-2 flex gap-4 p-2">
                  <div className="flex flex-col items-center">
                    <img
                      src={movieImage}
                      alt="Doraemon"
                      className="w-full rounded-lg"
                    />
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-orange-700 px-4 py-2 text-sm font-medium text-black hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeMovieDetail}
                      >
                        Mua vé ngay
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium leading-6 text-orange-700 text-2xl pb-3">
                      {movie.title}
                    </h3>
                    <p className="text-black text-base">{movie.description}</p>
                    <ul className="mt-4 text-base text-black gap-2">
                      <li>
                        Phân loại:{" "}
                        <strong>
                          {" "}
                          {movie.classification === "T18"
                            ? "Phim giành cho người từ 18 tuổi trở lên"
                            : " Phim giành cho mọi đối tượng"}
                        </strong>
                      </li>
                      <li>
                        Định dạng: <strong> {movie.format}</strong>
                      </li>
                      <li>
                        Đạo diễn: <strong> {movie.director}</strong>
                      </li>
                      <li>
                        Diễn viên: <strong> {movie.actors}</strong>
                      </li>
                      <li>
                        Thể loại: <strong> {movie.genre}</strong>
                      </li>
                      <li>
                        Khởi chiếu:{" "}
                        <strong> {movie.releaseDate.toISOString()}</strong>
                      </li>
                      <li>
                        Thời lượng: <strong> {movie.duration}</strong>
                      </li>
                      <li>
                        Ngôn ngữ: <strong> {movie.subtitles}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MovieDetail;
