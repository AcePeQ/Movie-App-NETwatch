import { createPortal } from "react-dom";
import styles from "./ModalConfirm.module.css";
import Button from "../Button/Button";
import { ReactElement } from "react";

interface ModalTypes {
  handleCloseModal: () => void;
  handleAction: (e: Event) => void;
  isLoading?: boolean;
  children: ReactElement;
}

function ModalConfirm({
  handleCloseModal,
  handleAction,
  isLoading,
  children,
}: ModalTypes) {
  return createPortal(
    <>
      <div className={styles.overlay} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        {children}
        <div className={styles.modal_buttons}>
          <Button
            type="delete"
            size="small"
            disabled={isLoading}
            onClick={handleAction}
          >
            Yes
          </Button>
          <Button
            type="secondary"
            size="small"
            disabled={isLoading}
            onClick={handleCloseModal}
          >
            No
          </Button>
        </div>
      </div>
    </>,
    document.body
  );
}

export default ModalConfirm;
