import { ReactElement, useState } from "react";
import styles from "./Filter.module.css";

import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";

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
        className={styles.filterButton}
      >
        {title}
        {openMenu ? (
          <HiChevronUp className={styles.icon} />
        ) : (
          <HiChevronDown className={styles.icon} />
        )}
      </button>
      {openMenu && children}
    </div>
  );
}

export default Filter;
