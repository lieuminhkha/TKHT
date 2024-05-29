import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import eventImage from "../assets/Rectangle-20.png";
import ModalDetail from "./EventDetail";
import { Event } from "@/fake-data/Event";
// Importing Shadcn UI components

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);
  // , cinemaAddress, timeStart, subtitles, format
  const { eventName, description, timeStart, timeEnd } = event;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="movie-card  rounded-lg overflow-hidden shadow-md  bg-gray-900 pb-5 ">
      <div className=" w-4/5 mx-auto pb-2">
        <img
          src={eventImage}
          alt="Movie Title"
          className="w-full h-auto rounded-lg mb-3 cursor-pointer"
          onClick={openModal}
        />
        <h2
          onClick={openModal}
          className="text-orange-700 text-[16px] font-bold cursor-pointer"
        >
          {eventName}
        </h2>
        <h3 className="text-white text-[14px]">
          Diễn ra từ : {timeStart} - {timeEnd}
        </h3>
      </div>
      <ModalDetail
        isOpen={isOpen}
        closeEventDetail={closeModal}
        event={event}
      />
    </div>
  );
};

export default EventCard;
