import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";
import styles from "./WatchOnNow.module.css";

function WatchOnNow({ networks }) {
  return (
    <div className={styles.watchOnList}>
      {networks.map((network) => (
        <Network key={network.id} network={network} />
      ))}
    </div>
  );
}

function Network({ network }) {
  return (
    <div className={styles.network}>
      <img
        src={`${BASE_URL_W500}${network.logo_path}`}
        alt={network.name}
        className={styles.image}
      />
    </div>
  );
}

export default WatchOnNow;
