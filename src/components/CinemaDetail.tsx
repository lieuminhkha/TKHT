import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import cinemaImage from "../assets/t5_20230903094344079.jpg";
import { Movie } from "@/fake-data/MovieList";
import { Show } from "@/fake-data/Show";

type CinemaDetailProps = {
  show: Show;
  isOpen: boolean;
  closeCinemaDetail: () => void;
};

const CinemaDetail: React.FC<CinemaDetailProps> = ({
  isOpen,
  closeCinemaDetail,
  show,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCinemaDetail}>
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
                      src={cinemaImage}
                      alt="Doraemon"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium leading-6 text-orange-700 text-2xl pb-3">
                      {show.cinemaName}
                    </h3>
                    <p className="text-black text-base">
                      Địa chỉ: {show.cinemaAddress}
                    </p>
                    <ul className="mt-4 text-base text-black gap-2">
                      <li>
                        Định dạng: <strong> {show.format}</strong>
                      </li>
                      <li>
                        Ngôn ngữ: <strong> {show.subtitles}</strong>
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

export default CinemaDetail;
