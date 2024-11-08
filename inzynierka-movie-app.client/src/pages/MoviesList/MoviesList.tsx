import styles from "./MoviesList.module.css";
import ListContainer from "../../features/Lists/ListContainer/ListContainer";
import { useState } from "react";
import SidebarMovie from "../../features/Lists/Sidebar/SidebarMovie";

function MoviesList() {
  const [url, setUrl] = useState("");

  function handleUpdateUrl(url: string) {
    setUrl(url);
  }

  return (
    <div className={styles.list_container}>
      <SidebarMovie onUpdateUrl={handleUpdateUrl} />

      <ListContainer url={url} type="movie" />
    </div>
  );
}

export default MoviesList;
