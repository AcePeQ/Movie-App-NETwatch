import { MouseEventHandler, ReactElement } from "react";
import { HiX } from "react-icons/hi";

import styles from "./Button.module.css";

interface ButtonProps {
  type?: string;
  onClick?: MouseEventHandler;
  children?: string | ReactElement;
  size?: string;
}

function Button({ children, type, onClick, size }: ButtonProps) {
  if (type === `closeButton`) {
    return (
      <button
        onClick={onClick}
        className={`${styles.btnClose} ${styles[`${size}`]}`}
      >
        <HiX className={styles.iconClose} />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`${type}`]} ${styles[`${size}`]}`}
    >
      {children}
    </button>
  );
}

export default Button;
