import styles from "./DarkMode.module.css";

import { HiOutlineSun } from "react-icons/hi";
import { HiMiniMoon } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { changeMode, getMode } from "./darkmodeSlice";
import { useEffect } from "react";

const ICON_SIZE: number = 30;

function DarkMode() {
  const darkmode = useAppSelector(getMode);
  const dispatch = useAppDispatch();

  function handleChangeMode() {
    dispatch(changeMode());
  }

  useEffect(() => {
    if (darkmode) {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    }
  }, [darkmode]);

  return (
    <div className={styles.modeContainer} onClick={handleChangeMode}>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ y: "-150%" }}
          animate={{ y: "0%" }}
          exit={{ y: "150%", opacity: "0" }}
          transition={{ ease: "linear", duration: 0.4 }}
          key={darkmode ? 0 : 1}
        >
          {darkmode ? (
            <HiMiniMoon className={`${styles.moonIcon}`} size={ICON_SIZE} />
          ) : (
            <HiOutlineSun className={`${styles.sunIcon}`} size={ICON_SIZE} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default DarkMode;
