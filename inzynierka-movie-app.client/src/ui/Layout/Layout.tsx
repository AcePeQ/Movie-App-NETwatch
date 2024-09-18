import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ModalsAuthentication from "../../features/Authentication/ModalsAuthentication/ModalsAuthentication";
import { useMediaQuery } from "react-responsive";

function Layout() {
  const isSmallLaptop = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className={styles.layout}>
      {!isSmallLaptop && <Header />}

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
