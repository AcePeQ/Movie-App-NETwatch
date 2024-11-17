import styles from "./ModalMovie.module.css";
import { MouseEventHandler, useState } from "react";
import { createPortal } from "react-dom";

import Button from "../Button/Button";
import TabSeasons from "./TabSeasons/TabSeasons";
import TabInformations from "./TabInformations/TabInformations";

interface ModalProps {
  id: number;
  onClose: MouseEventHandler;
}

function ModalMovie({ id, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState(0);

  function handleChangeTab() {
    setActiveTab(activeTab === 0 ? 1 : 0);
  }

  return createPortal(
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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

        {activeTab === 0 && <TabInformations />}
        {activeTab === 1 && <TabSeasons />}
      </div>
    </div>,
    document.body
  );
}

export default ModalMovie;
