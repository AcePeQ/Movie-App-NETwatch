import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
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
      <li>
        <NavLink className={styles.navlink} to="account/watchlist">
          Watchlist
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
