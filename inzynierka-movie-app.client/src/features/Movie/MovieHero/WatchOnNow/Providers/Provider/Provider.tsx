import { Key } from "react";
import ProviderItem from "../ProviderItem/ProviderItem";
import styles from "./Provider.module.css";
import { ProviderType } from "../../../../../../utils/types";

export default function Provider({
  title,
  items,
  link,
}: {
  title: string;
  items: any;
  link: string;
}) {
  if (!items) {
    return null;
  }

  return (
    <div className={styles.provider}>
      <p className={styles.provider_title}>{title}</p>
      {items ? (
        <ul className={styles.provider_list}>
          {items.map((provider: ProviderType, index: Key) => (
            <ProviderItem key={index} link={link} provider={provider} />
          ))}
        </ul>
      ) : (
        <p>There is no records</p>
      )}
    </div>
  );
}
