import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import cinemaImage from "../assets/GARDEN-243x330-1.jpg";
import ModalDetail from "./CinemaDetail";
import { Movie } from "@/fake-data/MovieList";
import { Show } from "@/fake-data/Show";
// Importing Shadcn UI components

interface CinemaCardProps {
  show: Show;
}

const CinemaCard: React.FC<CinemaCardProps> = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);
  // , cinemaAddress, timeStart, subtitles, format
  const { cinemaName } = show;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="movie-card  rounded-lg overflow-hidden shadow-md  bg-gray-900 pb-5 ">
      <div className="text-center w-4/5 mx-auto pb-2">
        <img
          src={cinemaImage}
          alt="Movie Title"
          className="w-full h-auto rounded-lg "
        />
      </div>
      <div className="flex items-center justify-center gap-2 p-2">
        <div>
          <h2 className="text-white text-[16px]">{cinemaName}</h2>
        </div>
        <div>
          <button
            className="buy-button bg-orange-700 text-white text-sm px-4 py-2 rounded-md text-center"
            onClick={openModal}
          >
            Thông tin chi tiết
          </button>
        </div>
      </div>
      <ModalDetail isOpen={isOpen} closeCinemaDetail={closeModal} show={show} />
    </div>
  );
};

export default CinemaCard;
