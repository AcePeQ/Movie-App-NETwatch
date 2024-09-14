import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Navbar type="loggedIn" />
    </header>
  );
}

export default Header;
