import styles from "./Socialmedia.module.css";

import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Socialmedia() {
  return (
    <div className={styles.socialMedias}>
      <a className={styles.socialMedia} href="#">
        <BsFacebook className={styles.icon} />
      </a>
      <a className={styles.socialMedia} href="#">
        <BsTwitterX className={styles.icon} />
      </a>
      <a className={styles.socialMedia} href="#">
        <BsInstagram className={styles.icon} />
      </a>
    </div>
  );
}

export default Socialmedia;
