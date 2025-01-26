import { WatchProviderDetails } from "../../../../../utils/types";
import Provider from "./Provider/Provider";
import styles from "./Providers.module.css";

export default function Providers({
  provider,
}: {
  provider: WatchProviderDetails;
}) {
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
  const providerLink = provider?.link;

  return (
    <div className={styles.providers}>
      <Provider title="Stream" items={streamProviders} link={providerLink} />
      <Provider title="Buy" items={buyProviders} link={providerLink} />
      <Provider title="Rent" items={rentProviders} link={providerLink} />
    </div>
  );
}
