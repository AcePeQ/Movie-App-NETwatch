import { ErrorType } from "../../utils/types";
import styles from "./Error.module.css";

function Error({ error }: { error: ErrorType }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorTitle}>Something went wrong!</p>
      <p className={styles.error_message}>{error?.message}</p>
    </div>
  );
}

export default Error;
