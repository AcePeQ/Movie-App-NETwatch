import styles from "./TVSeriesList.module.css";

import ListContainer from "../../features/Lists/ListContainer/ListContainer";
import { useState } from "react";
import SidebarTvSeries from "../../features/Lists/Sidebar/SidebarTvSeries";

function TVSeriesList() {
  const [url, setUrl] = useState("");

  function handleUpdateUrl(url: string) {
    setUrl(url);
  }

  return (
    <div className={styles.list_container}>
      <SidebarTvSeries onUpdateUrl={handleUpdateUrl} />

      <ListContainer url={url} type="tvSeries" />
    </div>
  );
}

export default TVSeriesList;
