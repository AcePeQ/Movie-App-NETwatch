import { MouseEventHandler, ReactNode } from "react";
import styles from "./Modal.module.css";

import { HiX } from "react-icons/hi";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  title: string;
  onClose?: MouseEventHandler;
}

function Modal({ children, title, onClose }: ModalProps) {
  return createPortal(
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <button onClick={onClose} className={styles.btnClose}>
            <HiX className={styles.iconClose} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
