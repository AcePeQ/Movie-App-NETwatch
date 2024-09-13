import Hero from "../../features/Homepage/Home/Hero/Hero";
import RowList from "../../features/Homepage/RowList/RowList";

function Home() {
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
