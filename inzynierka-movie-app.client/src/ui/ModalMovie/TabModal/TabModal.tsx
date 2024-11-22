import { ReactElement } from "react";
import Button from "../../Button/Button";
import styles from "./TabModal.module.css";

function TabModal({ children }: { children: ReactElement }) {
  return (
    <div className={styles.main}>
      <div className={styles.imageBox}>
        <img
          src="/public/shogunPoster.webp"
          alt="shogun"
          className={styles.image}
        />
      </div>
      {children}
      <div className={styles.formBtns}>
        <Button size="medium" type="primary">
          Save
        </Button>
        <Button size="small" type="delete">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TabModal;
