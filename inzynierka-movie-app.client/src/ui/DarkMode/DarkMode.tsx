import { useState } from "react";
import styles from "./DarkMode.module.css";

import { HiOutlineSun } from "react-icons/hi";
import { HiMiniMoon } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const ICON_SIZE: number = 30;

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  function handleChangeMode() {
    setIsDarkMode((mode) => !mode);
  }

  return (
    <div className={styles.modeContainer} onClick={handleChangeMode}>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ y: "-150%" }}
          animate={{ y: "0%" }}
          exit={{ y: "150%", opacity: "0" }}
          transition={{ ease: "linear", duration: 0.4 }}
          key={isDarkMode ? 0 : 1}
        >
          {isDarkMode ? (
            <HiMiniMoon className={`${styles.moonIcon}`} size={ICON_SIZE} />
          ) : (
            <HiOutlineSun className={`${styles.sunIcon}`} size={ICON_SIZE} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // if (isDarkMode) {
  //   return (
  //     <AnimatePresence>
  //       {isDarkMode && (
  //         <motion.div
  //           key="darkMode"
  //           initial={{ y: "-100%" }}
  //           animate={{ y: "0%" }}
  //           exit={{ y: "100%" }}
  //           transition={{ duration: 0.4 }}
  //           className={styles.modeContainer}
  //           onClick={handleChangeMode}
  //         >
  //           <HiMiniMoon className={`${styles.moonIcon}`} size={ICON_SIZE} />
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   );
  // }
}

export default DarkMode;
