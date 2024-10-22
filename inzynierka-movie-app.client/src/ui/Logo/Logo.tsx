import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.logoLink} to="/">
      <img
        src="/public/logoSVG2.svg"
        className={styles.logo}
        alt="Logo of NETwatch"
      />
      <p>
        NET<span>watch</span>
      </p>
    </Link>
  );
}

export default Logo;
