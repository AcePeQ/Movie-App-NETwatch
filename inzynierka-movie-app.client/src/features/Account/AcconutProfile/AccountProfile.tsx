import Avatar from "../../../ui/Avatar/Avatar";
import Button from "../../../ui/Button/Button";
import styles from "./AccountProfile.module.css";

function AccountProfile() {
  return (
    <div className={styles.accountProfile}>
      <Avatar type="account" />
      <Button type="account" size="full">
        AcePeQ's List
      </Button>
    </div>
  );
}

export default AccountProfile;
