import styles from "./Hero.module.css";

import SliderItem from "../SliderItem/SliderItem";
import Dots from "../../../../ui/Dots/Dots";
import { useEffect, useState } from "react";
import { GeneralProductionItem } from "../../../../utils/types";

type HeroPropsTypes = {
  items: GeneralProductionItem[];
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
