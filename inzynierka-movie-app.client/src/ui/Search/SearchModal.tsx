import { useState } from "react";
import styles from "./SearchModal.module.css";
import Modal from "../Modal/Modal";
import Search from "./Search";
import { HiSearch } from "react-icons/hi";

function SearchModal() {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  function handleCloseModal() {
    setSearchModalOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setSearchModalOpen(true)}
        className={styles.searchButton}
      >
        <HiSearch className={styles.searchIcon} />
      </button>
      {isSearchModalOpen && (
        <Modal title="Find your movie" onClose={handleCloseModal}>
          <Search />
        </Modal>
      )}
    </>
  );
}

export default SearchModal;
