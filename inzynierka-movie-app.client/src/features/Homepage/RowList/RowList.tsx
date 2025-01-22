import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { sliderSettings } from "../../../helpers/sliderSettings";

import styles from "./RowList.module.css";
import { CardItem } from "../../../utils/types";

type RowListProps = {
  title: string;
  items: CardItem[];
  render: (movie: CardItem, index: number) => JSX.Element;
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
