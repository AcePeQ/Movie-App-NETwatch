import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUser } from "../../../features/Authentication/userSlice";

function Navigation() {
  const user = useAppSelector(getUser);

  return (
    <ul className={styles.navigationList}>
      <li>
        <NavLink className={styles.navlink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/list/movies">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/list/tvseries">
          TV Series
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className={styles.navlink} to="account/watchlist">
            Watchlist
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navigation;
