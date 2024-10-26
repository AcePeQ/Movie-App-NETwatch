import styles from "./Sidebar.module.css";

import { ReactNode } from "react";

function Sidebar({ children }: { children: ReactNode }) {
  return <div className={styles.sidebar}>{children}</div>;
}

export default Sidebar;
