import styles from "./Hero.module.css";

import SliderItem from "../SliderItem/SliderItem";
import Dots from "../../../../ui/Dots/Dots";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <Dots />
      </div>
    </div>
  );
}

export default Hero;
