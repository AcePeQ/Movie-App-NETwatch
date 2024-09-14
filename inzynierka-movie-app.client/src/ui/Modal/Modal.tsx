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
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <Button type="closeButton" size="absoluteModal" />
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
