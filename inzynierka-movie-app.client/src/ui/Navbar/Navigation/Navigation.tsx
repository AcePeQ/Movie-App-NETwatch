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
        <NavLink className={styles.navlink} to="/new">
          New
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/popular">
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/watchlist">
          Watchlist
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
