import { Link } from "react-router-dom";
import styles from "./AccountHeader.module.css";
import { RiSettings5Fill } from "react-icons/ri";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUsername } from "../../Authentication/userSlice";

interface AccountHeaderTypes {
  user: {
    id: string;
    username: string;
  };
}

function AccountHeader({ user }: AccountHeaderTypes) {
  const loggedUser = useAppSelector(getUsername);

  return (
    <div className={styles.header}>
      <p className={styles.accountName}>{user.username}</p>
      {loggedUser === user.username && (
        <>
          <Link to={`/user/settings`}>
            <RiSettings5Fill className={styles.icon} />
          </Link>
        </>
      )}
    </div>
  );
}

export default AccountHeader;
