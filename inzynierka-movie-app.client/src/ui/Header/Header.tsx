import { useMediaQuery } from "react-responsive";
import { Navbar } from "../Navbar/Navbar";
import TabletNav from "../MobileNav/TabletNav";
import styles from "./Header.module.css";

function Header() {
  const isSmallLaptop = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  });

  return (
    <header className={styles.header}>
      {!isSmallLaptop && !isMobile && <Navbar type="loggedIn" />}
      {isSmallLaptop && !isMobile && <TabletNav type="loggedIn" />}
    </header>
  );
}

export default Header;
