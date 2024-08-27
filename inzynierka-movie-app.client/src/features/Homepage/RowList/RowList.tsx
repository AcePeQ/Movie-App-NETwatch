import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "./RowList.module.css";
// import MovieItem from "./MovieItem/MovieItem";
import MovieItemTop from "./MovieItemTop/MovieItemTop";

interface RowProps {
  title: string;
}

function RowList({ title }: RowProps) {
  return (
    <div className={styles.row}>
      <h2 className={styles.rowHeader}>{title}</h2>

      <Slider
        speed={1500}
        dots={false}
        slidesToShow={5}
        slidesToScroll={5}
        infinite={false}
      >
        <MovieItemTop number="1" />
        <MovieItemTop number="2" />
        <MovieItemTop number="3" />
        <MovieItemTop number="4" />
        <MovieItemTop number="5" />
        <MovieItemTop number="6" />
        <MovieItemTop number="7" />
        <MovieItemTop number="8" />
        <MovieItemTop number="9" />
        <MovieItemTop number="10" />
      </Slider>
    </div>
  );
}

export default RowList;
