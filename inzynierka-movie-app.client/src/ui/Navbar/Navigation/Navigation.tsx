import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useAppSelector } from "../../../hooks/useRedux";
import { getUserToken } from "../../../features/Authentication/userSlice";

function Navigation() {
  const token = useAppSelector(getUserToken);

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
      {token && (
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
