import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import CinemasPage from "./pages/CinemasPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import AuthenticationPage from "./pages/AuthenticationPage";
import TimeAndPositionBooking from "./pages/TimeAndPositionBooking";
import EventsPage from "./pages/EventsPage";
import BookingPage from "./pages/BookingPage";
import SeatPage from "./pages/SeatPage";
import ShowtimePage from "./pages/ShowtimePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MovieListPage from "./pages/MovieListPage";
import ShowtimeListPage from "./pages/ShowtimeListPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout >
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      {/* <Route path="/drop-down" element={ <DropdownAddress/> }/> */}
      <Route element={<ProtectedRoute />}>
        {/* <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/authentication"
          element={
            <Layout>
              <AuthenticationPage />
            </Layout>
          }
        /> */}
        {/* <Route
          path="/time-and-position"
          element={
            <Layout>
              <TimeAndPositionBooking />
            </Layout>
          }
        /> */}
      </Route>
      <Route path="/*" element={<Navigate to="/" />} />
      {/* <Route
        path="/cinema"
        element={
          <Layout>
            <CinemasPage />
          </Layout>
        }
      /> */}
      <Route
        path="/showtime/:showtimeId"
        element={
          <Layout>
            <ShowtimePage />
          </Layout>
        }
      />
      <Route
        path="/movie/:movieId"
        element={
          <Layout>
            <MovieDetailPage />
          </Layout>
        }
      />
      <Route
        path="/movie-list/:status"
        element={
          <Layout>
            <MovieListPage />
          </Layout>
        }
      />
      <Route
        path="/showtime-list/"
        element={
          <Layout>
            <ShowtimeListPage />
          </Layout>
        }
      />

      {/* <Route
        path="/event"
        element={
          <Layout>
            <EventsPage />
          </Layout>
        }
      /> */}
      <Route
        path="/booking/:status"
        element={
          <Layout>
            <BookingPage />
          </Layout>
        }
      />
      {/* <Route
        path="/seat"
        element={
          <Layout>
            <SeatPage />
          </Layout>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
