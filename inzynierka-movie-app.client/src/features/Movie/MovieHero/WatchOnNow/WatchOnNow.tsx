import styles from "./WatchOnNow.module.css";
import SelectRegion from "./SelectRegion/SelectRegion";
import { useState } from "react";

function WatchOnNow({ regions }) {
  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: "United Kingdom",
  });

  return (
    <div className={styles.watchOnList}>
      <SelectRegion
        regions={regions}
        selectRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
      />
    </div>
  );
}

export default WatchOnNow;
