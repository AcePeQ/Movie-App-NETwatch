import styles from "./Hero.module.css";

import SliderItem from "../SliderItem/SliderItem";
import Dots from "../../../../ui/Dots/Dots";
import { useEffect, useRef, useState } from "react";

interface HeroPropsTypes {
  items: Array<[]>;
}

function Hero({ items }: HeroPropsTypes) {
  const [index, setIndex] = useState(0);
  const itemsLength = items.length;
  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      setIndex((curIndex) => {
        if (index === itemsLength - 1) return 0;
        return curIndex + 1;
      });
    }, 5000);
    return () => clearInterval(intervalID.current);
  }, [index, itemsLength]);

  function handleDotClick(dotIndex) {
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
