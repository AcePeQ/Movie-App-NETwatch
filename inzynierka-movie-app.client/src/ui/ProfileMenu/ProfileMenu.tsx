import Avatar from "../Avatar/Avatar";

import styles from "./ProfileMenu.module.css";

import { useState } from "react";

import { HiUserCircle } from "react-icons/hi2";
import { HiOutlineViewList } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";

import { HiMiniChevronUp } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getUser, logout } from "../../features/Authentication/userSlice";
import { Link, useNavigate } from "react-router-dom";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleClickTemp() {
    setIsOpen((open) => !open);
  }

  function handleLogout() {
    navigate("/");
    dispatch(logout());
  }

  return (
    <div className={styles.profileMenu}>
      <div className={styles.profile} onClick={handleClickTemp}>
        <Avatar type="profile" />
        <p className={styles.profileName}>{user?.username}</p>
        {isOpen ? (
          <HiMiniChevronUp className={styles.profileIcon} />
        ) : (
          <HiMiniChevronDown className={styles.profileIcon} />
        )}
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.itemList}>
            <Link className={styles.dropdownItem} to="/">
              <li className={styles.item}>
                <HiUserCircle />
                <p className={styles.title}>Profile</p>
              </li>
            </Link>

            <Link className={styles.dropdownItem} to="/">
              <li className={styles.item}>
                <HiOutlineViewList />
                <p className={styles.title}>Watchlist</p>
              </li>
            </Link>

            <Link className={styles.dropdownItem} to="/">
              <li className={styles.item}>
                <RiSettings5Fill />
                <p className={styles.title}>Settings</p>
              </li>
            </Link>

            <div className={styles.dropdownItem} onClick={handleLogout}>
              <li className={styles.item}>
                <HiOutlineLogout />
                <p className={styles.title}>Logout</p>
              </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
