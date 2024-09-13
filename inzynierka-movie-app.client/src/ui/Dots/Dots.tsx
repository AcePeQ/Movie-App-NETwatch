import styles from "./Dots.module.css";

function Dots() {
  return (
    <div className={styles.dots}>
      <span className={`${styles.dot} ${styles.dotActive}`}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  );
}

export default Dots;
