import { useEffect } from "react";
import Hero from "../../features/Homepage/Home/Hero/Hero";
import RowList from "../../features/Homepage/RowList/RowList";

function Home() {
  useEffect(() => {
    async function fetchPopularMovies() {
      const res = await fetch("/Home/GetPopularMovies");
      console.log(res);
      const data = await res.json();

      console.log(data);
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <RowList title="New" />
      <RowList title="Popular" />
      <RowList title="Upcoming" />
    </>
  );
}

export default Home;
