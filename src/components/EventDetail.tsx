import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import eventImage from "../assets/Rectangle-20.png";
import { Movie } from "@/fake-data/MovieList";
import { Show } from "@/fake-data/Show";
import { Event } from "@/fake-data/Event";
type EventDetailProps = {
  event: Event;
  isOpen: boolean;
  closeEventDetail: () => void;
};

const EventDetail: React.FC<EventDetailProps> = ({
  isOpen,
  closeEventDetail,
  event,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeEventDetail}>
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
          <div className="flex min-h-full items-center justify-center p-3 text-center">
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
                <div className="mt-2 flex gap-3  p-2">
                  <div className="w-1/3">
                    <img
                      src={eventImage}
                      alt="Doraemon"
                      className="w-full rounded-lg px-3"
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="font-medium leading-6 text-orange-700 text-2xl pb-3">
                      {event.eventName}
                    </h3>
                    <p className="text-white text-base mb-3">
                      Diễn ra từ : {event.timeStart} - {event.timeEnd}
                    </p>
                    <p className="text-white text-base">{event.description}</p>
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

export default EventDetail;
