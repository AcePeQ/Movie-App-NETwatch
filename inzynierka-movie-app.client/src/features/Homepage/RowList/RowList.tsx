import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "./RowList.module.css";

import MovieItem from "./MovieItem/MovieItem";
import sliderSettings from "../../../helpers/SliderSettings";
import MovieItemTop from "./MovieItemTop/MovieItemTop";

interface RowProps {
  title: string;
}

function RowList({ title }: RowProps) {
  const settings = sliderSettings();

  return (
    <div className={styles.row}>
      <h3 className={styles.rowTitle}>{title}</h3>

      <Slider {...settings}>
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
        {/* <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" />
        <MovieItem type="slider" /> */}
      </Slider>
    </div>
  );
}

export default RowList;
