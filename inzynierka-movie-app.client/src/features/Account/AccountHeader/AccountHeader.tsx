import { Link } from "react-router-dom";
import styles from "./AccountHeader.module.css";
import { RiSettings5Fill } from "react-icons/ri";
import { useGetFetchQuery } from "../../../hooks/useGetFetchQuery";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUser } from "../../Authentication/userSlice";

function AccountHeader() {
  const user: { user: { username: string; id: string } } = useGetFetchQuery([
    "userAccount",
  ]);
  const loggedUser = useAppSelector(getUser);
  const { username, id } = user.user;

  return (
    <div className={styles.header}>
      <p className={styles.accountName}>{username}</p>
      {loggedUser?.id === id && (
        <Link to={`/user/${loggedUser.username}/settings`}>
          <RiSettings5Fill className={styles.icon} />
        </Link>
      )}
    </div>
  );
}

export default AccountHeader;
