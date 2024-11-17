import { useDispatch } from "react-redux";
import { openModalLogin } from "../../features/Authentication/modalLoginSlice";
import { openModalRegister } from "../../features/Authentication/modalRegisterSlice";
import Button from "../Button/Button";
import styles from "./TabletNav.module.css";
import Logo from "../Logo/Logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import NavigationMobile from "./NavigationTablet/NavigationMobile";
import SearchModal from "../Search/SearchModal";

interface NavbarPropsTypes {
  type: boolean;
}

function TabletNav({ type }: NavbarPropsTypes) {
  const dispatch = useDispatch();

  if (type) {
    return (
      <nav className={styles.nav}>
        <Logo />

        <div className={styles.buttons}>
          <ProfileMenu />
          <SearchModal />
          <NavigationMobile />
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <Logo />
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
        <SearchModal />
        <NavigationMobile />
      </div>
    </nav>
  );
}

export default TabletNav;
