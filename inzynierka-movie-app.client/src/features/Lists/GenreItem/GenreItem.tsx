import { useState } from "react";
import { GenreType } from "../../../utils/types";
import styles from "./GenreItem.module.css";

function GenreItem({ genre }: { genre: GenreType }) {
  const { id, name } = genre;
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected((curState) => !curState);
  }

  return (
    <div
      className={`${styles.genre} ${styles[isSelected ? "active" : ""]}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

export default GenreItem;
