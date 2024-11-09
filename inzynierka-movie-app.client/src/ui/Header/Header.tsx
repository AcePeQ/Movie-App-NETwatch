import { useMediaQuery } from "react-responsive";
import { Navbar } from "../Navbar/Navbar";
import TabletNav from "../MobileNav/TabletNav";
import styles from "./Header.module.css";

function Header() {
  const isSmallLaptop = useMediaQuery({
    query: "(max-width: 1225px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  });

  return (
    <header className={styles.header}>
      {!isSmallLaptop && !isMobile && <Navbar />}
      {isSmallLaptop && !isMobile && <TabletNav />}
    </header>
  );
}

export default Header;
