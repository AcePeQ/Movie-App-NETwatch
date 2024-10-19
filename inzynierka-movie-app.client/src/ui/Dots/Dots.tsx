import { HeroItemType } from "../../utils/types";
import styles from "./Dots.module.css";

type Dots = {
  onDotClick: (dotIndex: number) => void;
  items: HeroItemType[];
  indexImage: number;
};

type Dot = {
  onDotClick: (dotIndex: number) => void;
  index: number;
  indexImage: number;
};

function Dots({ onDotClick, items, indexImage }: Dots) {
  return (
    <div className={styles.dots}>
      {items.map((_, index: number) => (
        <Dot
          key={index}
          index={index}
          indexImage={indexImage}
          onDotClick={onDotClick}
        />
      ))}
    </div>
  );
}

function Dot({ index, onDotClick, indexImage }: Dot) {
  return (
    <span
      onClick={() => onDotClick(index)}
      className={`${styles.dot} ${
        styles[indexImage === index ? "dotActive" : ""]
      }`}
    ></span>
  );
}

export default Dots;
