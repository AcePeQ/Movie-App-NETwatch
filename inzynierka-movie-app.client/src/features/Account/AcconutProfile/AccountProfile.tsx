import Avatar from "../../../ui/Avatar/Avatar";
import Button from "../../../ui/Button/Button";
import styles from "./AccountProfile.module.css";

function AccountProfile({ user }: { user: string }) {
  return (
    <div className={styles.accountProfile}>
      <Avatar type="account" />
      <Button type="account" size="full">
        {`${user}'s List`}
      </Button>
    </div>
  );
}

export default AccountProfile;
