import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";

interface MovieItemProps {
  number: string;
}

function MovieItemTop({ number }: MovieItemProps) {
  return (
    <Link className={styles.link} to="/">
      <div className={styles.number}>{number}</div>
      <div className={styles.movie}>
        <img src="/public/shogunPoster.webp" className={styles.image} />
        <div className={styles.options}>
          {/* <HiCog6Tooth /> */}
          <HiPlusCircle />
        </div>
      </div>
    </Link>
  );
}

export default MovieItemTop;
