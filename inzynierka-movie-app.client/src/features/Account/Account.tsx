import { useParams } from "react-router-dom";
import AccountProfile from "./AcconutProfile/AccountProfile";
import styles from "./Account.module.css";
import AccountCharts from "./AccountCharts/AccountCharts";
import AccountHeader from "./AccountHeader/AccountHeader";
import Stats from "./AccountStats/Stats";
import { useAccount } from "./useAccount";
import Error from "../../ui/Error/Error";
import Loading from "../../ui/Loading/Loading";

function Account() {
  const { username: user } = useParams();

  const { isLoading, isError, error } = useAccount(user);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className={styles.accountContainer}>
      <AccountProfile />

      <div className={styles.profileInformations}>
        <AccountHeader />
        <Stats />
        <AccountCharts />
      </div>
    </div>
  );
}

export default Account;
