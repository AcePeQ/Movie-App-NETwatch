import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ModalsAuthentication from "../../features/Authentication/ModalsAuthentication/ModalsAuthentication";
import { useMediaQuery } from "react-responsive";
import Mobile from "../MobileNav/Mobile/Mobile";

function Layout() {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  });

  return (
    <section className={styles.layout}>
      {!isMobile && <Header />}
      {isMobile && <Mobile type="loggedIn" />}

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
