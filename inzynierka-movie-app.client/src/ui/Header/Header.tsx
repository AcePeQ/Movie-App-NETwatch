// import { Navbar as NavbarSO } from "../Navbar/SignedOut/Navbar";
import { Navbar as NavbarIN } from "../Navbar/SignedIn/Navbar";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* <NavbarSO /> */}
      <NavbarIN />
    </header>
  );
}

export default Header;
