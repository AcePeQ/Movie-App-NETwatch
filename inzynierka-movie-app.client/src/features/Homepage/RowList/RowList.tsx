import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "./RowList.module.css";

import { sliderSettings } from "../../../helpers/SliderSettings";

interface RowProps {
  title: string;
  items: Array<[]>;
  render: () => JSX.Element;
}

function RowList({ title, items, render }: RowProps) {
  const settings = sliderSettings();

  return (
    <div className={styles.row}>
      <h3 className={styles.rowTitle}>{title}</h3>

      <Slider {...settings}>{items.map(render)}</Slider>
    </div>
  );
}

export default RowList;
