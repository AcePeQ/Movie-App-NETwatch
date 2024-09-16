import Button from "../../ui/Button/Button";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/public/projector.gif" className={styles.gif} />
        <p className={styles.error}>
          4<span className={styles.highlight}>0</span>4
        </p>
      </div>
      <div className={styles.main}>
        <p className={styles.notFound}>Page Not Found</p>
        <Button size="big" type="primary">
          Go back to home
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
