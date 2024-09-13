import { ReactElement, useState } from "react";

import styles from "./Filter.module.css";

import { HiMiniChevronUp } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";

function Filter({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.filter}>
      <button
        onClick={() => setOpenMenu((status) => !status)}
        className={styles.button}
      >
        {title}
        {openMenu ? (
          <HiMiniChevronUp className={styles.icon} />
        ) : (
          <HiMiniChevronDown className={styles.icon} />
        )}
      </button>
      {openMenu && children}
    </div>
  );
}

export default Filter;
