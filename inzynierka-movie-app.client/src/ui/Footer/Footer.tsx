import Logo from "../Logo/Logo";
import FootbarNavbar from "./FootbarNav/FootbarNavbar";
import styles from "./Footer.module.css";
import Socialmedia from "./Socialmedia/Socialmedia";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <Logo />

        <Socialmedia />

        <FootbarNavbar />
      </div>
      <p className={styles.copyright}>© Copyright 2024. All rights reserved</p>
    </footer>
  );
}

export default Footer;
