import AccountProfile from "./AcconutProfile/AccountProfile";
import styles from "./Account.module.css";
import AccountCharts from "./AccountCharts/AccountCharts";
import AccountHeader from "./AccountHeader/AccountHeader";
import Stats from "./AccountStats/Stats";

function Account() {
  return (
    <div className={styles.accountContainer}>
      <AccountProfile />

      <div className={styles.informations}>
        <AccountHeader />
        <Stats />
        <AccountCharts />
      </div>
    </div>
  );
}

export default Account;
