import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <section className={styles.layout}>
      <Header />

      <main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </section>
  );
}

export default Layout;
