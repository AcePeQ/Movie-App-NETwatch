import styles from "./Navbar.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Search from "../../Search/Search";
import Button from "../../Button/Button";
import DarkMode from "../../../features/DarkMode/DarkMode";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <Logo />
        <Navigation />
      </div>

      <div className={styles.rightSide}>
        <Search />

        <DarkMode />

        <div className={styles.buttonsContainer}>
          <Button size="small" type="secondary">
            Sign in
          </Button>
          <Button size="small" type="primary">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}
