import { useState } from "react";
import ListContainer from "../../features/Lists/ListContainer/ListContainer";
import Sidebar from "../../features/Lists/Sidebar/Sidebar";
import { useRegions } from "../../features/Lists/useRegions";

import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Loading from "../../ui/Loading/Loading";
import SelectList from "../../ui/SelectList/SelectList";
import { Region } from "../../utils/types";
import styles from "./MoviesList.module.css";
import { getFlagEmoji } from "../../helpers/getFlagEmoji";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

const sortOptions = [
  { value: "Popularity Descending", label: "Popularity Descending" },
  { value: "Popularity Ascending", label: "Popularity Ascending" },
  { value: "Rating Descending", label: "Rating Descending" },
  { value: "Rating Ascending", label: "Rating Ascending" },
  { value: "Release Date Descending", label: "Release Date Descending" },
  { value: "Release Date Ascending", label: "Release Date Ascending" },
  { value: "Title (A-Z)", label: "Title (A-Z)" },
];

polyfillCountryFlagEmojis();

function MoviesList() {
  const { regionsData, isPendingRegions, isErrorRegions, errorRegions } =
    useRegions();

  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: "United Kingdom",
  });

  if (isPendingRegions) {
    return <Loading />;
  }

  if (isErrorRegions) {
    return <ErrorFull error={errorRegions} />;
  }

  const regions = regionsData.results;

  const optionRegions = regions.map((item: Region) => {
    return {
      value: item.iso_3166_1,
      label: `${getFlagEmoji(item.iso_3166_1)} ${item.english_name}`,
    };
  });
  const defaultRegion = optionRegions.find(
    (item: { value: string }) => item.value === "GB"
  );

  console.log(regionsData);
  console.log(selectedRegion);

  return (
    <div className={styles.list_container}>
      <Sidebar>
        <FilterPanel title="Sort">
          <div className={styles.filter_wrapper}>
            <p className={styles.filter_name}>Sort Results By</p>
            <SelectList
              options={sortOptions}
              isSearchable={false}
              defaultOption={sortOptions[0]}
            />
          </div>
        </FilterPanel>

        <FilterPanel title="Where To Watch">
          <div className={styles.filter_wrapper}>
            <p className={styles.filter_name}>Country</p>
            <SelectList
              isSearchable={true}
              classNamePrefix="region"
              className="basic-single"
              name="region"
              options={optionRegions}
              defaultOption={defaultRegion}
            />
          </div>
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
