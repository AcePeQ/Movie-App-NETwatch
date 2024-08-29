import { Link } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./ProfileItem.module.css";

interface ProfileItemProps {
  item: ProfileItemDes;
}

interface ProfileItemDes {
  title: string;
  icon: ReactNode;
  toPath: string;
  callback?: void;
}

function ProfileItem({ item }: ProfileItemProps) {
  const { title, icon, toPath, callback }: ProfileItemDes = item;

  return (
    <Link className={styles.dropdownItem} to={toPath}>
      <li className={styles.item}>
        {icon}
        <p className={styles.title}>{title}</p>
      </li>
    </Link>
  );
}

export default ProfileItem;
