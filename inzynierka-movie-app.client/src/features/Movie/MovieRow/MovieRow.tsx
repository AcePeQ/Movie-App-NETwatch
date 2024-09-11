import { ReactElement } from "react";
import styles from "./MovieRow.module.css";

function MovieRow({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
  return (
    <div className={styles.row}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
}

export default MovieRow;
