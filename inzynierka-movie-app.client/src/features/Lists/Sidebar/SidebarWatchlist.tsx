import SelectList from "../../../ui/SelectList/SelectList";
import FilterPanel from "../../../ui/FilterPanel/FilterPanel";
import styles from "./Sidebar.module.css";
import { SidebarOptionsType } from "../../../utils/types";

interface SidebarTypes {
  setSortBy: React.Dispatch<React.SetStateAction<SidebarOptionsType>>;
  setTypeBy: React.Dispatch<React.SetStateAction<SidebarOptionsType>>;
  sortOptions: SidebarOptionsType[];
  typeOptions: SidebarOptionsType[];
  setStatusBy: React.Dispatch<React.SetStateAction<SidebarOptionsType>>;
  statusOptions: SidebarOptionsType[];
}

function SidebarWatchlist({
  setSortBy,
  setTypeBy,
  sortOptions,
  typeOptions,
  setStatusBy,
  statusOptions,
}: SidebarTypes) {
  return (
    <div className={styles.sidebar}>
      <FilterPanel title="Type">
        <div className={styles.filter_wrapper}>
          <SelectList
            options={typeOptions}
            isSearchable={false}
            defaultOption={typeOptions[0]}
            onChange={(newValue) => {
              if (newValue) setTypeBy(newValue);
            }}
          />
        </div>
      </FilterPanel>

      <FilterPanel title="Status">
        <div className={styles.filter_wrapper}>
          <SelectList
            options={statusOptions}
            isSearchable={false}
            defaultOption={statusOptions[0]}
            onChange={(newValue) => {
              if (newValue) setStatusBy(newValue);
            }}
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
            onChange={(newValue) => {
              if (newValue) setSortBy(newValue);
            }}
          />
        </div>
      </FilterPanel>
    </div>
  );
}

export default SidebarWatchlist;
