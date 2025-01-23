import { ReactElement } from "react";
import { HiX } from "react-icons/hi";

import styles from "./Button.module.css";

interface ButtonProps {
  type?: string;
  onClick?: React.MouseEventHandler;
  children?: string | ReactElement;
  size?: string;
  disabled?: boolean;
}

function Button({ children, type, onClick, size, disabled }: ButtonProps) {
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
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
