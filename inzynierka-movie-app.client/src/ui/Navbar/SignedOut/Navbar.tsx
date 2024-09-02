import styles from "./Navbar.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Search from "../../Search/Search";
import Button from "../../Button/Button";
import DarkMode from "../../../features/DarkMode/DarkMode";
import { useDispatch } from "react-redux";
import { openModalRegister } from "../../../features/Authentication/modalRegisterSlice";
import { openModalLogin } from "../../../features/Authentication/modalLoginSlice";

export function Navbar() {
  const dispatch = useDispatch();

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
