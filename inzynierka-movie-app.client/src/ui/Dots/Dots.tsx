import styles from "./Dots.module.css";
type HeroItem = {
  backdrop_path: string;
  first_air_date: string | null;
  genres_ids: [] | null;
  genre_ids: [] | null;
  id: number;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  vote_average: number;
  media_type: string;
};

type Dots = {
  onDotClick: (dotIndex: number) => void;
  items: HeroItem[];
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
