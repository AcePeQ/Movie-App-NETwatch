import Avatar from "../Avatar/Avatar";

import styles from "./ProfileMenu.module.css";

import { useEffect, useRef, useState } from "react";

import { HiUserCircle } from "react-icons/hi2";
import { HiOutlineViewList } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";

import { HiMiniChevronUp } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getUsername, logout } from "../../features/Authentication/userSlice";
import { Link, useNavigate } from "react-router-dom";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const username = useAppSelector(getUsername);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (!menuRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  function handleLogout() {
    navigate("/");
    dispatch(logout());
  }

  return (
    <div
      className={styles.profileMenu}
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={menuRef}
    >
      <div
        className={styles.profile}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Avatar type="profile" />
        <p className={styles.profileName}>{username}</p>
        {isOpen ? (
          <HiMiniChevronUp className={styles.profileIcon} />
        ) : (
          <HiMiniChevronDown className={styles.profileIcon} />
        )}
      </div>

      <div
        className={`${styles.dropdown} ${
          styles[isOpen ? "active" : "inActive"]
        }`}
      >
        <ul
          className={styles.itemList}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Link className={styles.dropdownItem} to={`/user/${username}`}>
            <li className={styles.item}>
              <HiUserCircle />
              <p className={styles.title}>Profile</p>
            </li>
          </Link>

          <Link className={styles.dropdownItem} to={`/${username}/watchlist`}>
            <li className={styles.item}>
              <HiOutlineViewList />
              <p className={styles.title}>Watchlist</p>
            </li>
          </Link>

          <Link className={styles.dropdownItem} to={`/user/settings`}>
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
    </div>
  );
}

export default ProfileMenu;
