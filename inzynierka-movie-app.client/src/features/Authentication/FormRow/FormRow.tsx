import { ReactElement, ReactNode } from "react";

import styles from "./FormRow.module.css";

import { HiEyeOff } from "react-icons/hi";

interface FormRowProps {
  label?: string;
  error?: string;
  children: ReactElement;
  icon?: ReactNode;
}

function FormRow({ label, error, icon, children }: FormRowProps) {
  if (label === "Password" || label === "Confirm password") {
    return (
      <div className={styles.formRow}>
        <div className={styles.row}>
          {icon}
          <HiEyeOff className={styles.iconPassword} />
          {children}
          {label && (
            <label className={styles.label} htmlFor={children.props.id}>
              {label}
            </label>
          )}
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }

  return (
    <div className={styles.formRow}>
      <div className={styles.row}>
        {icon}
        {children}
        {label && (
          <label className={styles.label} htmlFor={children.props.id}>
            {label}
          </label>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default FormRow;
