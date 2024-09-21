import { useState } from "react";
import styles from "./Mobile.module.css";
import { HiOutlineViewList, HiX } from "react-icons/hi";
import Search from "../../Search/Search";
import Navigation from "../../Navbar/Navigation/Navigation";
import DarkMode from "../../../features/DarkMode/DarkMode";
import Logo from "../../Logo/Logo";
import Button from "../../Button/Button";
import { openModalLogin } from "../../../features/Authentication/modalLoginSlice";
import { openModalRegister } from "../../../features/Authentication/modalRegisterSlice";
import { useDispatch } from "react-redux";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";

interface NavbarPropsTypes {
  type?: string;
}

function Mobile({ type }: NavbarPropsTypes) {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = type === "loggedIn";

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
        <div
          onClick={() => setOpenNav((status) => !status)}
          className={styles.overlay}
        >
          <div
            className={styles.navigationContainer}
            onClick={(e) => e.stopPropagation()}
          >
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
            <Search />
            <Navigation />
            <DarkMode />
          </div>
        </div>
      )}
    </>
  );
}

export default Mobile;
