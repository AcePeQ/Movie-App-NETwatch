import { useRef, useState } from "react";
import ListContainer from "../../features/Lists/ListContainer/ListContainer";
import Sidebar from "../../features/Lists/Sidebar/Sidebar";
import { useRegions } from "../../features/Lists/useRegions";

import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Loading from "../../ui/Loading/Loading";
import SelectList from "../../ui/SelectList/SelectList";
import { Region, RegionWatchProvider } from "../../utils/types";
import styles from "./MoviesList.module.css";
import { getFlagEmoji } from "../../helpers/getFlagEmoji";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useMovieWatchProviders } from "../../features/Lists/useWatchProviders";
import WatchProviderItem from "../../features/Lists/WatchProviderItem/WatchProviderItem";
import LoaderSmall from "../../ui/LoaderSmall/LoaderSmall";

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
    label: `${getFlagEmoji("GB")} United Kingdom`,
  });

  const {
    movieProviders,
    movieProvidersError,
    movieProvidersIsError,
    movieProvidersIsPending,
  } = useMovieWatchProviders(selectedRegion.value);

  const checkedProvidersRef = useRef<Set<number>>(new Set());

  const handleProviderToggle = (providerId: number) => {
    if (checkedProvidersRef.current.has(providerId)) {
      checkedProvidersRef.current.delete(providerId);
    } else {
      checkedProvidersRef.current.add(providerId);
    }
  };

  if (isPendingRegions) {
    return <Loading />;
  }

  if (isErrorRegions || movieProvidersIsError) {
    return <ErrorFull error={errorRegions || movieProvidersError} />;
  }

  const regions = regionsData.results;
  const watchProviders = movieProviders?.results;

  const optionRegions = regions.map((item: Region) => {
    return {
      value: item.iso_3166_1,
      label: `${getFlagEmoji(item.iso_3166_1)} ${item.english_name}`,
    };
  });

  console.log(regionsData);
  console.log(selectedRegion);
  console.log(watchProviders);

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

        <FilterPanel title={`Where To Watch (${watchProviders?.length || 0})`}>
          <div className={styles.filter_wrapper}>
            <SelectList
              isSearchable={true}
              classNamePrefix="region"
              className="basic-single"
              name="region"
              options={optionRegions}
              defaultOption={selectedRegion}
              onChange={setSelectedRegion}
            />

            {movieProvidersIsPending ? (
              <LoaderSmall />
            ) : (
              <ul className={styles.watchProviders}>
                {watchProviders.map((provider: RegionWatchProvider) => (
                  <WatchProviderItem
                    key={provider.provider_id}
                    provider={provider}
                    checkedProvidersRef={checkedProvidersRef}
                    onToggle={handleProviderToggle}
                  />
                ))}
              </ul>
            )}
          </div>
        </FilterPanel>

        <FilterPanel title="Filters">
          <div className={styles.filter_wrapper}>
            <div className={styles.filter_children}>
              <p className={styles.filter_name}>Release Date</p>
            </div>

            <div className={styles.filter_children}>
              <p className={styles.filter_name}>Genres</p>
            </div>

            <div className={styles.filter_children}>
              <p className={styles.filter_name}>Score</p>
            </div>
          </div>
        </FilterPanel>
      </Sidebar>

      <ListContainer />
    </div>
  );
}

export default MoviesList;
