import { ReactElement } from "react";
import styles from "./DetailRow.module.css";

interface DetailRowPropsType {
  children: ReactElement;
  title: string;
}

function DetailRow({ children, title }: DetailRowPropsType) {
  return (
    <div className={styles.row}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
}

export default DetailRow;
