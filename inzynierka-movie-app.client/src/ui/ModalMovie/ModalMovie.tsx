import styles from "./ModalMovie.module.css";
import { MouseEventHandler, useState } from "react";
import { createPortal } from "react-dom";

import Button from "../Button/Button";
import TabSeasons from "./TabSeasons/TabSeasons";
import TabInformations from "./TabInformations/TabInformations";
import TabModal from "./TabModal/TabModal";
import { useGetModalMovie } from "./useGetModalMovie";
import LoaderSmall from "../LoaderSmall/LoaderSmall";
import Error from "../Error/Error";

interface ModalProps {
  id: number;
  isMovie: boolean;
  onClose: MouseEventHandler;
}

function ModalMovie({ id, isMovie, onClose }: ModalProps) {
  const { movieData, isModalError, isModalLoading, modalError } =
    useGetModalMovie(id, isMovie);
  const [activeTab, setActiveTab] = useState(0);

  if (isModalLoading) {
    return <LoaderSmall />;
  }

  if (isModalError) {
    return <Error error={modalError} />;
  }

  console.log(movieData);

  function handleChangeTab() {
    setActiveTab(activeTab === 0 ? 1 : 0);
  }

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modal} onClick={(e) => e.preventDefault()}>
        <div className={styles.header}>
          <div className={styles.tabs}>
            <button
              onClick={handleChangeTab}
              className={`${styles.btn} ${
                activeTab === 0 ? styles.active : ""
              }`}
            >
              Informations
            </button>

            <button
              onClick={handleChangeTab}
              className={`${styles.btn} ${
                activeTab === 1 ? styles.active : ""
              }`}
            >
              Episodes
            </button>
          </div>

          <Button type="closeButton" size="normal" onClick={onClose} />
        </div>

        <TabModal>
          {activeTab === 0 && <TabInformations />}
          {activeTab === 1 && <TabSeasons />}
        </TabModal>
      </div>
    </>,
    document.body
  );
}

export default ModalMovie;
