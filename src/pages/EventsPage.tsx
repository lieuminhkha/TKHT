import landingPageImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import MovieList from "@/components/MovieList";
import { fakeShows } from "../fake-data/Show";
import MoviesNow from "@/components/MoviesNow";
import PreSaleTicket from "@/components/PreSaleTicket";
import MoviesComingSoon from "@/components/MoviesComingSoon";
import CinemaCard from "@/components/CinemaCard";
import EventCard from "@/components/EventCard";
import { fakeEvents } from "@/fake-data/Event";

const EventsPage = () => {
  return (
    <div>
      <div>
        <div className="w-full">
          <div className="py-5">
            <div className="mx-auto w-4/5 text-center text-black text-2xl font-bold">
              <h1>Sự kiện</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {fakeEvents.map((item, index) => (
            <EventCard key={index} event={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
