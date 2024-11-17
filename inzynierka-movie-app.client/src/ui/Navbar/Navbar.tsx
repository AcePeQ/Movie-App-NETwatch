import styles from "./Navbar.module.css";

import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Search from "../Search/Search";
import Button from "../Button/Button";
import DarkMode from "../../features/DarkMode/DarkMode";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

import { useDispatch } from "react-redux";
import { openModalRegister } from "../../features/Authentication/modalRegisterSlice";
import { openModalLogin } from "../../features/Authentication/modalLoginSlice";

interface NavbarPropsTypes {
  type: boolean;
}

export function Navbar({ type }: NavbarPropsTypes) {
  const dispatch = useDispatch();

  if (type) {
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

  return (
    <nav className={styles.nav}>
      <div className={styles.leftNav}>
        <Logo />
        <Navigation />
      </div>

      <div className={styles.rightNav}>
        <Search />

        <DarkMode />

        <div className={styles.buttons}>
          <Button
            size="small"
            type="secondary"
            onClick={() => dispatch(openModalLogin())}
          >
            Sign in
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => dispatch(openModalRegister())}
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}
