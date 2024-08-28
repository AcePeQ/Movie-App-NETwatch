import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./ui/Layout/Layout";
import Home from "./pages/HomePage/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
