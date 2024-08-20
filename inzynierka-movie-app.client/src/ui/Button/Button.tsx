import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type: string;
  onClick?: MouseEventHandler;
  children: string;
  size: string;
}

function Button({ children, type, onClick, size }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;
