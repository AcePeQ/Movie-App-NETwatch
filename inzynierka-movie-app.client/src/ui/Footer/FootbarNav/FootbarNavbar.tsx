import { NavLink } from "react-router-dom";
import styles from "./FootbarNavbar.module.css";

function FootbarNavbar() {
  return (
    <ul className={styles.navigationList}>
      <li>
        <NavLink className={styles.navlink} to="/Abs">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/new">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/popular">
          Privacy
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/watchlist">
          Terms
        </NavLink>
      </li>
    </ul>
  );
}

export default FootbarNavbar;
