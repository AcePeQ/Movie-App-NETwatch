import { MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import Button from "../Button/Button";

interface ModalProps {
  children: ReactNode;
  title: string;
  onClose?: MouseEventHandler;
}

function Modal({ children, title, onClose }: ModalProps) {
  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <Button type="closeButton" size="absoluteModal" onClick={onClose} />
        </div>
        {children}
      </div>
    </>,
    document.body
  );
}

export default Modal;
