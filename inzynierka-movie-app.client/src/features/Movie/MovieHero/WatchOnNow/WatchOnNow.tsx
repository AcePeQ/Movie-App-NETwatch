import styles from "./WatchOnNow.module.css";
import SelectRegion from "./SelectRegion/SelectRegion";
import { useState } from "react";

import Providers from "./Providers/Providers";
import { RegionType, WatchProviders } from "../../../../utils/types";

function WatchOnNow({
  regions,
  watchProviders,
}: {
  regions: RegionType;
  watchProviders: WatchProviders;
}) {
  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: "United Kingdom",
  });

  console.log(watchProviders);

  const providerForSelectedRegion = watchProviders[selectedRegion.value];

  return (
    <div className={styles.watchOnList}>
      <SelectRegion regions={regions} onSelectRegion={setSelectedRegion} />
      <Providers provider={providerForSelectedRegion} />
    </div>
  );
}

export default WatchOnNow;
