import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

import styles from "./FilterPanel.module.css";
import { ReactElement, useState } from "react";

export default function FilterPanel({
  children,
  title,
}: {
  children: ReactElement;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenPanel() {
    setIsOpen((open) => !open);
  }

  return (
    <div className={styles.filter_panel}>
      <div className={styles.filter_header} onClick={handleOpenPanel}>
        <p className={styles.filter_title}>{title}</p>
        <span className={styles.filter_icon}>
          {!isOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        </span>
      </div>
      {isOpen && <div className={styles.filter_main}>{children}</div>}
    </div>
  );
}
