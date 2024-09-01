import FormRegister from "../../features/Authentication/Register/FormRegister";
import Hero from "../../features/Homepage/Hero/Hero";
import RowList from "../../features/Homepage/RowList/RowList";
import Modal from "../../ui/Modal/Modal";

function Home() {
  function Click() {
    console.log("ello");
  }

  return (
    <>
      <Hero />
      <RowList title="New" />
      <RowList title="Popular" />
      <RowList title="Upcoming" />

      <Modal title="Sign up" onClose={Click}>
        <FormRegister />
      </Modal>
    </>
  );
}

export default Home;
