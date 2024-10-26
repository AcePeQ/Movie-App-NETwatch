import styles from "./WatchOnNow.module.css";
import SelectRegion from "./SelectRegion/SelectRegion";
import { useState } from "react";
import { Regions, WatchProviders } from "../../../../utils/types";
import Providers from "./Providers/Providers";

function WatchOnNow({
  regions,
  watchProviders,
}: {
  regions: Regions;
  watchProviders: WatchProviders;
}) {
  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: "United Kingdom",
  });

  const providerForSelectedRegion = watchProviders[selectedRegion.value];

  return (
    <div className={styles.watchOnList}>
      <SelectRegion regions={regions} onSelectRegion={setSelectedRegion} />
      <Providers provider={providerForSelectedRegion} />
    </div>
  );
}

export default WatchOnNow;
