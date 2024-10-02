import { HiMiniArrowLongRight } from "react-icons/hi2";
import styles from "./ShowMore.module.css";

import { Link } from "react-router-dom";

function ShowMore({ linkTo }) {
  return (
    <Link to={`${linkTo}`} className={styles.more}>
      <span>Show more</span>
      <HiMiniArrowLongRight className={styles.arrow} />
    </Link>
  );
}

export default ShowMore;
