import styles from "./Hero.module.css";

import SliderItem from "../SliderItem/SliderItem";
import Dots from "../../../../ui/Dots/Dots";
import { useEffect, useState } from "react";

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

type HeroPropsTypes = {
  items: HeroItem[];
};

function Hero({ items }: HeroPropsTypes) {
  const [index, setIndex] = useState(0);
  const itemsLength = items.length;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((curIndex) => {
        if (index === itemsLength - 1) return 0;
        return curIndex + 1;
      });
    }, 5000);
    return () => clearInterval(intervalID);
  }, [index, itemsLength]);

  function handleDotClick(dotIndex: number) {
    setIndex(dotIndex);
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        {items.map((item) => (
          <SliderItem key={item.id} item={item} index={index} />
        ))}
        <Dots onDotClick={handleDotClick} items={items} indexImage={index} />
      </div>
    </div>
  );
}

export default Hero;
