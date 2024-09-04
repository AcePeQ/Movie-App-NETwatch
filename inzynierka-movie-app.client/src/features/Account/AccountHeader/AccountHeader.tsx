import { Link } from "react-router-dom";
import styles from "./AccountHeader.module.css";
import { RiSettings5Fill } from "react-icons/ri";

function AccountHeader() {
  return (
    <div className={styles.header}>
      <p className={styles.accountName}>AcePeQ</p>
      <Link to="/account/settings">
        <RiSettings5Fill className={styles.icon} />
      </Link>
    </div>
  );
}

export default AccountHeader;
