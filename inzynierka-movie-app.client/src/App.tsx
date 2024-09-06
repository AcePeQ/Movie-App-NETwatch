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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/account/watchlist" element={<LayoutWatchlist />}>
              <Route index element={<Navigate replace to="all" />} />
              <Route path="all" element={<All />} />
              <Route path="currentWatching" element={<All />} />
            </Route>

            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />

            <Route path="account" element={<AccountPage />} />
            <Route path="account/settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
