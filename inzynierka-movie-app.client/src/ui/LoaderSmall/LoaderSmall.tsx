import styles from "./LoaderSmall.module.css";

function LoaderSmall() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default LoaderSmall;
