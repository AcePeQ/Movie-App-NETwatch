import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense } from "react";

import Loading from "./ui/Loading/Loading";
import { Toaster } from "react-hot-toast";

const Layout = lazy(() => import(`./ui/Layout/Layout`));
const Home = lazy(() => import(`./pages/HomePage/Home`));
const PageNotFound = lazy(() => import(`./pages/PageNotFound/PageNotFound`));
const FAQ = lazy(() => import(`./pages/FAQ/FAQ`));
const AboutUs = lazy(() => import(`./pages/AboutUs/AboutUs`));
const Contact = lazy(() => import(`./pages/Contact/Contact`));
const Settings = lazy(() => import(`./pages/SettingsPage/SettingsPage`));
const AccountPage = lazy(() => import(`./pages/AccountPage/AccountPage`));
const LayoutWatchlist = lazy(
  () => import(`./ui/LayoutWatchlist/LayoutWatchlist`)
);
const All = lazy(() => import(`./features/Watchlist/All/All`));
const CurrentWatching = lazy(
  () => import(`./features/Watchlist/CurrentWatching/CurrentWatching`)
);
const Completed = lazy(
  () => import(`./features/Watchlist/Completed/Completed`)
);
const PlanToWatch = lazy(
  () => import(`./features/Watchlist/PlanToWatch/PlanToWatch`)
);
const OnHold = lazy(() => import(`./features/Watchlist/OnHold/OnHold`));
const Dropped = lazy(() => import(`./features/Watchlist/Dropped/Dropped`));
const MoviePage = lazy(() => import(`./pages/MoviePage/MoviePage`));
const TvSeriesPage = lazy(() => import(`./pages/TvSeriesPage/TvSeriesPage`));
const CastPage = lazy(() => import(`./pages/CastPage/CastPage`));
const SearchPage = lazy(() => import(`./pages/SearchPage/SearchPage`));
const PersonPage = lazy(() => import(`./pages/PersonPage/PersonPage`));
const TVSeriesList = lazy(() => import(`./pages/TVSeriesList/TVSeriesList`));
const MoviesList = lazy(() => import(`./pages/MoviesList/MoviesList`));

const MINUTES_60_IN_MILISECONDS = 3_600_000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MINUTES_60_IN_MILISECONDS,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={true} client={queryClient} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="list/movies" element={<MoviesList />} />
              <Route path="list/tvseries" element={<TVSeriesList />} />

              <Route path="movie/:id" element={<MoviePage />} />
              <Route path="tv/:id" element={<TvSeriesPage />} />

              <Route path=":type/:id/cast" element={<CastPage />} />
              <Route path="person/:id" element={<PersonPage />} />

              <Route path="search/:query" element={<SearchPage />} />

              <Route path="/account/watchlist" element={<LayoutWatchlist />}>
                <Route index element={<Navigate replace to="all" />} />
                <Route path="all" element={<All />} />
                <Route path="currentwatching" element={<CurrentWatching />} />
                <Route path="completed" element={<Completed />} />
                <Route path="plantowatch" element={<PlanToWatch />} />
                <Route path="onhold" element={<OnHold />} />
                <Route path="dropped" element={<Dropped />} />
              </Route>

              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />

              <Route path="user/:username" element={<AccountPage />} />
              <Route path="user/settings" element={<Settings />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerClassName="notify-toaster"
        containerStyle={{ margin: "8px", zIndex: "10000001" }}
        toastOptions={{
          className: "toast-option",
          style: {
            backgroundColor: "var(--background-100)",
            color: "var(--text-100)",
            fontWeight: "600",
            fontSize: "1.6rem",
            fontFamily: "inherit",
            zIndex: "10000000",
          },
          success: {
            duration: 4000,
          },
          error: {
            duration: 8000,
          },
        }}
      />
    </QueryClientProvider>
  );
}
export default App;
