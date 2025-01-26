import { BASE_URL_W200 } from "../../../../../../helpers/getBaseUrl";
import { WatchProviderItem } from "../../../../../../utils/types";

import styles from "./ProviderItem.module.css";

export default function ProviderItem({
  provider,
  link,
}: {
  provider: WatchProviderItem;
  link: string;
}) {
  return (
    <li className={styles.provider_item}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.provider_link}
      >
        <img
          src={`${BASE_URL_W200}${provider.logo_path}`}
          alt={`Logo of ${provider.provider_name}`}
        />
      </a>
    </li>
  );
}
