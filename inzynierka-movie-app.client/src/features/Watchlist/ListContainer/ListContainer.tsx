import { ReactElement } from "react";
import styles from "./ListContainer.module.css";

interface ListContainerPropsType {
  children: ReactElement;
}

function ListContainer({ children }: ListContainerPropsType) {
  return <div className={styles.listContainer}>{children}</div>;
}

export default ListContainer;
