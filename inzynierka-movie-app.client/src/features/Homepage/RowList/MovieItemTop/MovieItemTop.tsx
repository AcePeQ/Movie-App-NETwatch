import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";

interface MovieItemProps {
  number: string;
}

function MovieItemTop({ number }: MovieItemProps) {
  const backgroundImage = { background: `url(/public/shogunPoster.webp)` };

  return (
    <Link className={styles.link} to="/">
      <div className={styles.numberBox}>{number}</div>
      <div className={styles.movieBox} style={backgroundImage}>
        <div className={styles.movieOptions}>
          {/* <HiCog6Tooth /> */}
          <HiPlusCircle />
        </div>
      </div>
    </Link>
  );
}

export default MovieItemTop;
