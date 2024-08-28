import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "./RowList.module.css";
import MovieItem from "./MovieItem/MovieItem";
// import MovieItemTop from "./MovieItemTop/MovieItemTop";

interface RowProps {
  title: string;
}

function RowList({ title }: RowProps) {
  return (
    <div className={styles.row}>
      <h3 className={styles.rowHeader}>{title}</h3>

      <Slider
        speed={1500}
        dots={false}
        slidesToShow={5}
        slidesToScroll={5}
        infinite={false}
      >
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </Slider>
    </div>
  );
}

export default RowList;
