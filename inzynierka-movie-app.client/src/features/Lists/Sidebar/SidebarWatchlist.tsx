import SelectList from "../../../ui/SelectList/SelectList";
import FilterPanel from "../../../ui/FilterPanel/FilterPanel";
import styles from "./Sidebar.module.css";

function SidebarWatchlist({
  sortBy,
  setSortBy,
  typeBy,
  setTypeBy,
  sortOptions,
  typeOptions,
  statusBy,
  setStatusBy,
  statusOptions,
}) {
  return (
    <div className={styles.sidebar}>
      <FilterPanel title="Type">
        <div className={styles.filter_wrapper}>
          <SelectList
            options={typeOptions}
            isSearchable={false}
            defaultOption={typeOptions[0]}
            onChange={(option: { value: string }) => setTypeBy(option.value)}
          />
        </div>
      </FilterPanel>

      <FilterPanel title="Status">
        <div className={styles.filter_wrapper}>
          <SelectList
            options={statusOptions}
            isSearchable={false}
            defaultOption={statusOptions[0]}
            onChange={(option: { value: string }) => setStatusBy(option.value)}
          />
        </div>
      </FilterPanel>

      <FilterPanel title="Sort">
        <div className={styles.filter_wrapper}>
          <p className={styles.filter_name}>Sort By</p>
          <SelectList
            options={sortOptions}
            isSearchable={false}
            defaultOption={sortOptions[0]}
            onChange={(option: { value: string }) => setSortBy(option.value)}
          />
        </div>
      </FilterPanel>
    </div>
  );
}

export default SidebarWatchlist;
