import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./ui/Layout/Layout";
import Home from "./pages/HomePage/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import FAQ from "./pages/FAQ/FAQ";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Settings from "./pages/SettingsPage/SettingsPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import LayoutWatchlist from "./ui/LayoutWatchlist/LayoutWatchlist";
import All from "./features/Watchlist/All/All";
import CurrentWatching from "./features/Watchlist/CurrentWatching/CurrentWatching";
import Completed from "./features/Watchlist/Completed/Completed";
import PlanToWatch from "./features/Watchlist/PlanToWatch/PlanToWatch";
import OnHold from "./features/Watchlist/OnHold/OnHold";
import Dropped from "./features/Watchlist/Dropped/Dropped";
import New from "./pages/NewPage/New";
import MoviePage from "./pages/MoviePage/MoviePage";
import TvSeriesPage from "./pages/TvSeriesPage/TvSeriesPage";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="new" element={<New />} />

            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="tv/:id" element={<TvSeriesPage />} />

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

            <Route path="account" element={<AccountPage />} />
            <Route path="account/settings" element={<Settings />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
