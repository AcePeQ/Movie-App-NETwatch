import { useGetFetchQuery } from "../../../hooks/useGetFetchQuery";
import Avatar from "../../../ui/Avatar/Avatar";
import Button from "../../../ui/Button/Button";
import styles from "./AccountProfile.module.css";

function AccountProfile() {
  const user: { user: { username: string } } = useGetFetchQuery([
    "userAccount",
  ]);

  return (
    <div className={styles.accountProfile}>
      <Avatar type="account" />
      <Button type="account" size="full">
        {`${user?.user?.username}'s List`}
      </Button>
    </div>
  );
}

export default AccountProfile;
