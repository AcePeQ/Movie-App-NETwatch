import { Link } from "react-router-dom";
import styles from "./AccountHeader.module.css";
import { RiSettings5Fill } from "react-icons/ri";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUser } from "../../Authentication/userSlice";

interface AccountHeaderTypes {
  user: {
    id: string;
    username: string;
  };
}

function AccountHeader({ user }: AccountHeaderTypes) {
  const loggedUser = useAppSelector(getUser);

  return (
    <div className={styles.header}>
      <p className={styles.accountName}>{user.username}</p>
      {loggedUser?.id === user.id && (
        <Link to={`/user/${user.username}/settings`}>
          <RiSettings5Fill className={styles.icon} />
        </Link>
      )}
    </div>
  );
}

export default AccountHeader;
