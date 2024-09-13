import styles from "./Navbar.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Search from "../../Search/Search";
import DarkMode from "../../../features/DarkMode/DarkMode";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftNav}>
        <Logo />
        <Navigation />
      </div>

      <div className={styles.rightNav}>
        <Search />

        <DarkMode />

        <ProfileMenu />
      </div>
    </nav>
  );
}
