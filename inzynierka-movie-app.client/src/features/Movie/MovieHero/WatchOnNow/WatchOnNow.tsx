import styles from "./WatchOnNow.module.css";
import SelectRegion from "./SelectRegion/SelectRegion";
import { useState } from "react";

import Providers from "./Providers/Providers";
import { RegionType, WatchProviders } from "../../../../utils/types";
import { SingleValue } from "react-select";

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

  const providerForSelectedRegion = watchProviders[selectedRegion.value];

  const handleSelectRegion = (
    selectedRegion: SingleValue<{ value: string; label: string }>
  ) => {
    if (selectedRegion) setSelectedRegion(selectedRegion);
  };

  return (
    <div className={styles.watchOnList}>
      <SelectRegion
        regions={Array.isArray(regions) ? regions : [regions]}
        onSelectRegion={handleSelectRegion}
      />
      <Providers provider={providerForSelectedRegion} />
    </div>
  );
}

export default WatchOnNow;
