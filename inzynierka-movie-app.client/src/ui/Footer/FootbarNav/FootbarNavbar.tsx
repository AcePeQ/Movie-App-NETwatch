import { NavLink } from "react-router-dom";
import styles from "./FootbarNavbar.module.css";

function FootbarNavbar() {
  return (
    <ul className={styles.navigationList}>
      <li>
        <NavLink className={styles.navlink} to="/about-us">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navlink} to="/faq">
          FAQ
        </NavLink>
      </li>
    </ul>
  );
}

export default FootbarNavbar;
