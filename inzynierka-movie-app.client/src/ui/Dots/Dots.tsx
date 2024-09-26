import styles from "./Dots.module.css";

function Dots({ onDotClick, items, indexImage }) {
  return (
    <div className={styles.dots}>
      {items.map((_, index) => (
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

function Dot({ index, onDotClick, indexImage }) {
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
