import Hero from "../../features/Homepage/Hero/Hero";
import New from "../../features/Homepage/New/New";
import Popular from "../../features/Homepage/Popular/Popular";
import Upcoming from "../../features/Homepage/Upcoming/Upcoming";

function Home() {
  return (
    <>
      <Hero />
      <New />
      <Popular />
      <Upcoming />
    </>
  );
}

export default Home;
