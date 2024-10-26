import ListContainer from "../../features/Lists/ListContainer/ListContainer";
import Sidebar from "../../features/Lists/Sidebar/Sidebar";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import styles from "./MoviesList.module.css";

function MoviesList() {
  return (
    <div className={styles.list_container}>
      <Sidebar>
        <FilterPanel title="Sort">
          <div>Sort</div>
        </FilterPanel>

        <FilterPanel title="Where To Watch">
          <div>Where to watch</div>
        </FilterPanel>

        <FilterPanel title="Filters">
          <div>Filters</div>
        </FilterPanel>
      </Sidebar>

      <ListContainer />
    </div>
  );
}

export default MoviesList;
