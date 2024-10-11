import styles from "./Loading.module.css";

function Loading({ type }: { type?: string }) {
  return (
    <div className={`${styles.loaderContainer} ${styles[type ? type : ""]}`}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
