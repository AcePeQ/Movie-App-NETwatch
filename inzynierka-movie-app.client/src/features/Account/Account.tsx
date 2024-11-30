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
  const { username } = useParams();

  const { data, isLoading, isError, error } = useAccount(username);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  const user = data.user;
  const watchlist = data.user.watchlist;

  console.log(data);

  return (
    <div className={styles.accountContainer}>
      <AccountProfile user={user.username} />

      <div className={styles.profileInformations}>
        <AccountHeader user={user} />
        <Stats watchlist={watchlist} />
        {/* <AccountCharts /> */}
      </div>
    </div>
  );
}

export default Account;
