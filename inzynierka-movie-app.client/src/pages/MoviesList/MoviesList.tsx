import { useRef, useState } from "react";
import ListContainer from "../../features/Lists/ListContainer/ListContainer";
import Sidebar from "../../features/Lists/Sidebar/Sidebar";
import { useRegions } from "../../features/Lists/useRegions";

import ErrorFull from "../../ui/Error/ErrorFullPage/ErrorFullPage";
import FilterPanel from "../../ui/FilterPanel/FilterPanel";
import Loading from "../../ui/Loading/Loading";
import SelectList from "../../ui/SelectList/SelectList";
import { GenreType, Region, RegionWatchProvider } from "../../utils/types";
import styles from "./MoviesList.module.css";
import { getFlagEmoji } from "../../helpers/getFlagEmoji";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useMovieWatchProviders } from "../../features/Lists/useWatchProviders";
import WatchProviderItem from "../../features/Lists/WatchProviderItem/WatchProviderItem";
import LoaderSmall from "../../ui/LoaderSmall/LoaderSmall";

import ReactSlider from "react-slider";
import { useMovieGenres } from "../../features/Lists/useGenres";
import GenreItem from "../../features/Lists/GenreItem/GenreItem";

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

  const { genresData, isPendingGenres, isErrorGenres, errorGenres } =
    useMovieGenres();

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

  if (isErrorRegions || movieProvidersIsError || isErrorGenres) {
    return (
      <ErrorFull error={errorRegions || movieProvidersError || errorGenres} />
    );
  }

  const regions = regionsData.results;

  const genres = genresData?.genres;
  console.log(genresData);

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
  console.log(genres);

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
              <ReactSlider
                className="horizontal-slider-years"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                defaultValue={[1890, 2024]}
                min={1890}
                max={2024}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={0}
              />
            </div>

            <div className={styles.filter_children}>
              <p className={styles.filter_name}>Genres</p>
              {isPendingGenres ? (
                <LoaderSmall />
              ) : (
                <ul className={styles.filter_genres}>
                  {genres?.map((genre: GenreType) => (
                    <GenreItem key={genre.id} genre={genre} />
                  ))}
                </ul>
              )}
            </div>

            <div className={styles.filter_children}>
              <p className={styles.filter_name}>Score</p>
              <ReactSlider
                className="horizontal-slider-rating"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                markClassName="slider-mark"
                defaultValue={[0, 10]}
                marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                min={1}
                max={10}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={1}
              />
            </div>
          </div>
        </FilterPanel>
      </Sidebar>

      <ListContainer />
    </div>
  );
}

export default MoviesList;
