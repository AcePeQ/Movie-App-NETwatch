import styles from "./WatchOnNow.module.css";
import SelectRegion from "./SelectRegion/SelectRegion";
import { useState } from "react";
import { BASE_URL_W200 } from "../../../../helpers/getBaseUrl";

function WatchOnNow({ regions, watchProviders }) {
  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: "United Kingdom",
  });

  const providerForSelectedRegion = watchProviders[selectedRegion.value];

  return (
    <div className={styles.watchOnList}>
      <SelectRegion
        regions={regions}
        selectRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
      />
      <Providers provider={providerForSelectedRegion} />
    </div>
  );
}

function Providers({ provider }) {
  if (!provider) {
    return (
      <p className={styles.notify}>
        There is no watch providers for this region
      </p>
    );
  }

  const streamProviders = provider?.flatrate;
  const buyProviders = provider?.buy;
  const rentProviders = provider?.rent;

  return (
    <div className={styles.providers}>
      <Provider title="Stream" items={streamProviders} />
      <Provider title="Buy" items={buyProviders} />
      <Provider title="Rent" items={rentProviders} />
    </div>
  );
}

function Provider({ title, items }) {
  if (!items) {
    return null;
  }

  return (
    <div className={styles.provider}>
      <p className={styles.provider_title}>{title}</p>
      {items ? (
        <ul className={styles.provider_list}>
          {items.map((provider) => (
            <ProviderItem provider={provider} />
          ))}{" "}
        </ul>
      ) : (
        <p>There is no records</p>
      )}
    </div>
  );
}

function ProviderItem({ provider }) {
  return (
    <li className={styles.provider_item}>
      <img
        src={`${BASE_URL_W200}${provider.logo_path}`}
        alt={`Logo of ${provider.name}`}
      />
    </li>
  );
}

export default WatchOnNow;
