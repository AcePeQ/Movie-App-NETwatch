import { useMediaQuery } from "react-responsive";
import { Navbar } from "../Navbar/Navbar";
import TabletNav from "../MobileNav/TabletNav";
import styles from "./Header.module.css";
import { useAppSelector } from "../../hooks/useRedux";
import { getUser } from "../../features/Authentication/userSlice";

function Header() {
  const isSmallLaptop = useMediaQuery({
    query: "(max-width: 1225px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  });

  const user = useAppSelector(getUser);
  const isLoggedIn = user ? true : false;

  return (
    <header className={styles.header}>
      {!isSmallLaptop && !isMobile && <Navbar type={isLoggedIn} />}
      {isSmallLaptop && !isMobile && <TabletNav type={isLoggedIn} />}
    </header>
  );
}

export default Header;
