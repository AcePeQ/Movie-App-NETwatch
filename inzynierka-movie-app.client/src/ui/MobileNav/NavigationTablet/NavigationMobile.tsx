import { useState } from "react";
import Navigation from "../../Navbar/Navigation/Navigation";
import styles from "./NavigationMobile.module.css";

import { HiOutlineViewList } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import DarkMode from "../../../features/DarkMode/DarkMode";

function NavigationMobile() {
  const [openNav, setOpenNav] = useState(false);

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
            <Navigation />
            <DarkMode />
          </div>
        </div>
      )}
    </>
  );
}

export default NavigationMobile;
