import styles from "./Socialmedia.module.css";

import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Socialmedia() {
  return (
    <div className={styles.socialMedias}>
      <a
        aria-label="facebook link"
        className={`${styles.socialMedia} ${styles.facebook}`}
        href="#"
      >
        <BsFacebook className={styles.icon} />
      </a>
      <a
        aria-label="twitter link"
        className={`${styles.socialMedia} ${styles.twitter}`}
        href="#"
      >
        <BsTwitterX className={styles.icon} />
      </a>
      <a
        aria-label="instagram link"
        className={`${styles.socialMedia} ${styles.instagram}`}
        href="#"
      >
        <BsInstagram className={styles.icon} />
      </a>
    </div>
  );
}

export default Socialmedia;
