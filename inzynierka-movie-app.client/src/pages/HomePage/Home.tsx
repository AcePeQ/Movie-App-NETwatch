import Hero from "../../features/Homepage/Home/Hero/Hero";
import RowList from "../../features/Homepage/RowList/RowList";
import ModalsAuthentication from "../../features/Authentication/ModalsAuthentication/ModalsAuthentication";

function Home() {
  return (
    <>
      <Hero />
      <RowList title="New" />
      <RowList title="Popular" />
      <RowList title="Upcoming" />

      <ModalsAuthentication />
    </>
  );
}

export default Home;
