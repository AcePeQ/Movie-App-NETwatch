import styles from "./WatchedEpisodes.module.css";

import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
import { SeasonType } from "../../utils/types";

interface EpisodesTypes {
  episodes: number;
  setEpisodes: React.Dispatch<React.SetStateAction<number>>;
  seasons: SeasonType[];
}

function WatchedEpisodes({ episodes, setEpisodes, seasons }: EpisodesTypes) {
  const numberOfEpisodes = seasons.reduce<number>(
    (acc, val) => acc + val.episode_count,
    0
  );

  function handleIncreaseEpisode() {
    if (episodes >= numberOfEpisodes) return;

    setEpisodes((cur: number) => +cur + 1);
  }

  function handleDecreaseEpisode() {
    if (episodes <= 0) return;

    setEpisodes((cur: number) => +cur - 1);
  }

  return (
    <div className={styles.wrapper}>
      <HiMiniPlus onClick={handleIncreaseEpisode} />
      <div className={styles.input}>
        {episodes}/{numberOfEpisodes}
      </div>
      <HiMiniMinus onClick={handleDecreaseEpisode} />
    </div>
  );
}

export default WatchedEpisodes;
