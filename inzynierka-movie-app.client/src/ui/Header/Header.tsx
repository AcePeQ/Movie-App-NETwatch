import { Navbar as NavbarSO } from "../Navbar/SignedOut/Navbar";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavbarSO />
    </header>
  );
}

export default Header;
