import styles from "./ErrorFullPage.module.css";

function ErrorFull({ error }: { error: Error | null }) {
  return (
    <div className={styles.errorContainer}>
      <img src="/public/serviceDown.svg" className={styles.image} />
      <p className={styles.errorTitle}>
        Something went wrong! <br /> Try again later!
      </p>
      <p className={styles.error_message}>{error?.message}</p>
    </div>
  );
}

export default ErrorFull;
