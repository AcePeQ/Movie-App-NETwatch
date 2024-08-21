import styles from "./Socialmedia.module.css";

import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const ICON_SIZE = 30;

function Socialmedia() {
  return (
    <div className={styles.socialMedias}>
      <a className={styles.link} href="#">
        <BsFacebook size={ICON_SIZE} className={styles.icon} />
      </a>
      <a className={styles.link} href="#">
        <BsTwitterX size={ICON_SIZE} className={styles.icon} />
      </a>
      <a className={styles.link} href="#">
        <BsInstagram size={ICON_SIZE} className={styles.icon} />
      </a>
    </div>
  );
}

export default Socialmedia;
