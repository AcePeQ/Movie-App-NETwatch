import Avatar from "../Avatar/Avatar";
import styles from "./ProfileMenu.module.css";

import { HiUserCircle } from "react-icons/hi2";
import { HiOutlineViewList } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";

import { ReactNode, useState } from "react";
import ProfileItem from "./ProfileItem/ProfileItem";

/*TEMP*/
function closeMenu() {}

const menu: {
  title: string;
  icon: ReactNode;
  toPath: string;
  callback?: void;
}[] = [
  { title: "Profile", icon: <HiUserCircle />, toPath: "/" },
  { title: "My watchlist", icon: <HiOutlineViewList />, toPath: "/" },
  { title: "Settings", icon: <RiSettings5Fill />, toPath: "/" },
  {
    title: "Logout",
    icon: <HiOutlineLogout />,
    toPath: "/",
    callback: closeMenu(),
  },
];

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickTemp() {
    setIsOpen((open) => !open);
  }

  return (
    <div onClick={handleClickTemp} className={styles.profileMenu}>
      <Avatar type="profile" />
      <p className={styles.profileName}>ABSCSWBZSDZX</p>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.itemList}>
            {menu.map((item) => (
              <ProfileItem item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
