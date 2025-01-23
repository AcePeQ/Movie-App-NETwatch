import { ReactElement } from "react";
import styles from "./TabModal.module.css";
import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";

function TabModal({
  children,
  poster,
}: {
  children: ReactElement;
  poster: string;
}) {
  return (
    <div className={styles.main}>
      <div className={styles.imageBox}>
        <img
          src={`${BASE_URL_W500}${poster}`}
          alt="shogun"
          className={styles.image}
        />
      </div>
      {children}
    </div>
  );
}

export default TabModal;
