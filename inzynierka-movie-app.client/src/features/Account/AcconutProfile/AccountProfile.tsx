import { useNavigate } from "react-router-dom";

import Button from "../../../ui/Button/Button";
import styles from "./AccountProfile.module.css";

function AccountProfile({ user }: { user: string }) {
  const navigate = useNavigate();

  return (
    <div className={styles.accountProfile}>
      <Button
        type="account"
        size="full"
        onClick={() => {
          navigate(`/${user}/watchlist`);
        }}
      >
        {`${user}'s List`}
      </Button>
    </div>
  );
}

export default AccountProfile;
