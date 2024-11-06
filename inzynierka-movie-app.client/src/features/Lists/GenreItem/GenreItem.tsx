import { useState } from "react";
import { GenreType } from "../../../utils/types";
import styles from "./GenreItem.module.css";

function GenreItem({
  genre,
  onClick,
}: {
  genre: GenreType;
  onClick: (id: number) => void;
}) {
  const { id, name } = genre;
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(id: number) {
    setIsSelected((curState) => !curState);
    onClick(id);
  }

  return (
    <div
      className={`${styles.genre} ${styles[isSelected ? "active" : ""]}`}
      onClick={() => handleClick(id)}
    >
      {name}
    </div>
  );
}

export default GenreItem;
