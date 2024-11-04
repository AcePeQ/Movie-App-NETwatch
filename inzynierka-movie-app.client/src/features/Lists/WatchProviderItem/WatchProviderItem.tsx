import { MutableRefObject, useState } from "react";
import { BASE_URL_W200 } from "../../../helpers/getBaseUrl";
import { RegionWatchProvider } from "../../../utils/types";
import styles from "./WatchProviderItem.module.css";

function WatchProviderItem({
  provider,
  checkedProvidersRef,
  onToggle,
}: {
  provider: RegionWatchProvider;
  checkedProvidersRef: MutableRefObject<Set<number>>;
  onToggle: (providerId: number) => void;
}) {
  const { logo_path, provider_name, provider_id } = provider;

  const [isChecked, setIsChecked] = useState(
    checkedProvidersRef.current.has(provider_id)
  );

  function handleClick() {
    setIsChecked((state) => !state);
    onToggle(provider_id);
  }

  return (
    <li
      className={`${styles.watchProviderItem}`}
      data-provider={`${provider_name}`}
      onClick={handleClick}
    >
      <span
        className={`${styles.display} ${styles[isChecked ? "active" : ""]}`}
      ></span>
      <img
        className={`${styles.watchProvider_image}`}
        src={`${BASE_URL_W200}${logo_path}`}
        alt={`Logo of ${provider_name}`}
      />
    </li>
  );
}

export default WatchProviderItem;
