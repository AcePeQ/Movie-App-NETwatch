import { useState } from "react";
import styles from "./Mobile.module.css";
import { HiOutlineViewList, HiX } from "react-icons/hi";
import Navigation from "../../Navbar/Navigation/Navigation";
import DarkMode from "../../../features/DarkMode/DarkMode";
import Logo from "../../Logo/Logo";
import Button from "../../Button/Button";
import { openModalLogin } from "../../../features/Authentication/modalLoginSlice";
import { openModalRegister } from "../../../features/Authentication/modalRegisterSlice";
import { useDispatch } from "react-redux";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";

interface NavbarPropsTypes {
  isLoggedIn: boolean;
}

function Mobile({ isLoggedIn }: NavbarPropsTypes) {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={styles.button}
        onClick={() => setOpenNav((status) => !status)}
      >
        {openNav ? (
          <HiX className={styles.icon} />
        ) : (
          <HiOutlineViewList className={styles.icon} />
        )}
      </div>
      {openNav && (
        <>
          <div
            onClick={() => setOpenNav((status) => !status)}
            className={styles.overlay}
          ></div>
          <div className={styles.navigationContainer}>
            <Logo />
            {isLoggedIn ? (
              <ProfileMenu />
            ) : (
              <>
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
              </>
            )}
            <Navigation />
            <DarkMode />
          </div>
        </>
      )}
    </>
  );
}

export default Mobile;
