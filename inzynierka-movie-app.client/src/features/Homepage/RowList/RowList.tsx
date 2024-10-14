import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { sliderSettings } from "../../../helpers/sliderSettings";

import styles from "./RowList.module.css";

type Item = {
  backdrop_path: string;
  first_air_date: string | null;
  genre_ids: [];
  id: number;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  vote_average: number;
};

type RowListProps = {
  title: string;
  items: Item[];
  render: (movie: Item, index: number) => JSX.Element;
};

function RowList({ title, items, render }: RowListProps) {
  const settings = sliderSettings();

  return (
    <div className={styles.row}>
      <h3 className={styles.rowTitle}>{title}</h3>

      <Slider {...settings}>{items.map(render)}</Slider>
    </div>
  );
}

export default RowList;
