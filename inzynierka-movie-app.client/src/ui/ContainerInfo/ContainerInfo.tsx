import styles from "./ContainerInfo.module.css";

interface ContainerInfoProps {
  children: React.ReactNode;
}

function ContainerInfo({ children }: ContainerInfoProps) {
  return <div className={styles.container}>{children}</div>;
}

export default ContainerInfo;
