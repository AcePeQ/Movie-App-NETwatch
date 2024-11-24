import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ModalsAuthentication from "../../features/Authentication/ModalsAuthentication/ModalsAuthentication";
import Mobile from "../MobileNav/Mobile/Mobile";
import SearchModal from "../Search/SearchModal";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../hooks/useRedux";
import { getUserToken } from "../../features/Authentication/userSlice";

function Layout() {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  });

  const token = useAppSelector(getUserToken);
  const isLoggedIn = token ? true : false;

  return (
    <section className={styles.layout}>
      {!isMobile && <Header />}
      {isMobile && (
        <>
          <Mobile isLoggedIn={isLoggedIn} />
          <SearchModal />
        </>
      )}

      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>

      <Footer />

      <ModalsAuthentication />
    </section>
  );
}

export default Layout;
