import ReactSlider from "react-slider";
import FilterPanel from "../../../ui/FilterPanel/FilterPanel";
import LoaderSmall from "../../../ui/LoaderSmall/LoaderSmall";
import SelectList from "../../../ui/SelectList/SelectList";
import WatchProviderItem from "../WatchProviderItem/WatchProviderItem";
import styles from "./Sidebar.module.css";
import GenreItem from "../GenreItem/GenreItem";
import Loading from "../../../ui/Loading/Loading";
import ErrorFull from "../../../ui/Error/ErrorFullPage/ErrorFullPage";
import { getFlagEmoji } from "../../../helpers/getFlagEmoji";
import { GenreType, Region, RegionWatchProvider } from "../../../utils/types";

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useEffect, useRef, useState } from "react";
import { useRegions } from "../useRegions";
import { useMovieWatchProviders } from "../useWatchProviders";
import { useMovieGenres } from "../useGenres";

polyfillCountryFlagEmojis();

const sortOptions = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "vote_count.desc", label: "Votes Descending" },
  { value: "vote_count.asc", label: "Votes Ascending" },
  { value: "primary_release_date.desc", label: "Release Date Descending" },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "title.desc", label: "Title (A-Z)" },
  { value: "title.asc", label: "Title (Z-A)" },
];

export default function SidebarMovie({
  onUpdateUrl,
}: {
  onUpdateUrl: (url: string) => void;
}) {
  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: `${getFlagEmoji("GB")} United Kingdom`,
  });
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [releaseDateRange, setReleaseDateRange] = useState([1890, 2024]);
  const [rating, setRating] = useState([1, 10]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [selectedProvides, setSelectedProvides] = useState<number[]>([]);
  const [minimumVoteCounts, setMinimumVoteCounts] = useState<number>(0);

  function handleGenreToggle(id: number) {
    setSelectedGenres((prev) => {
      if (prev.includes(id)) return prev.filter((idNow) => idNow !== id);
      return [...prev, id];
    });
  }

  const checkedProvidersRef = useRef<Set<number>>(new Set());

  const handleProviderToggle = (providerId: number) => {
    if (checkedProvidersRef.current.has(providerId)) {
      checkedProvidersRef.current.delete(providerId);
    } else {
      checkedProvidersRef.current.add(providerId);
    }
    setSelectedProvides([...checkedProvidersRef.current]);
  };

  const { regionsData, isPendingRegions, isErrorRegions, errorRegions } =
    useRegions();

  const {
    movieProviders,
    movieProvidersError,
    movieProvidersIsError,
    movieProvidersIsPending,
  } = useMovieWatchProviders(selectedRegion.value);

  const { genresData, isPendingGenres, isErrorGenres, errorGenres } =
    useMovieGenres();

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("release_date.gte", `${releaseDateRange[0]}-01-01`);
    params.append("release_date.lte", `${releaseDateRange[1]}-12-31`);
    params.append("sort_by", `${sortBy}`);
    params.append("watch_region", `${selectedRegion.value}`);
    params.append("vote_average.gte", `${rating[0]}`);
    params.append("vote_average.lte", `${rating[1]}`);
    params.append("vote_count.gte", `${minimumVoteCounts}`);
    if (selectedGenres.length > 0)
      params.append("with_genres", `${selectedGenres.join("%2C")}`);
    if (selectedProvides.length > 0)
      params.append("with_watch_providers", `${selectedProvides.join("%7C")}`);

    onUpdateUrl(params.toString());
  }, [
    rating,
    releaseDateRange,
    selectedGenres,
    selectedProvides,
    sortBy,
    selectedRegion,
    onUpdateUrl,
    minimumVoteCounts,
  ]);

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
  const watchProviders = movieProviders?.results;

  const optionRegions = regions.map((item: Region) => {
    return {
      value: item.iso_3166_1,
      label: `${getFlagEmoji(item.iso_3166_1)} ${item.english_name}`,
    };
  });

  return (
    <div className={styles.sidebar}>
      <FilterPanel title="Sort">
        <div className={styles.filter_wrapper}>
          <p className={styles.filter_name}>Sort Results By</p>
          <SelectList
            options={sortOptions}
            isSearchable={false}
            defaultOption={sortOptions[0]}
            onChange={(option: { value: string }) => setSortBy(option.value)}
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
            onChange={(option: { value: string; label: string }) => {
              setSelectedRegion(option);
              setSelectedProvides([]);
              checkedProvidersRef.current.clear();
            }}
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
              defaultValue={releaseDateRange}
              min={1890}
              max={2024}
              renderThumb={(props, state) => (
                <div key={`thumb-${state.index}`} {...props}>
                  {state.valueNow}
                </div>
              )}
              pearling
              minDistance={0}
              onChange={(value) => setReleaseDateRange([...value])}
            />
          </div>

          <div className={styles.filter_children}>
            <p className={styles.filter_name}>Genres</p>
            {isPendingGenres ? (
              <LoaderSmall />
            ) : (
              <ul className={styles.filter_genres}>
                {genres?.map((genre: GenreType) => (
                  <GenreItem
                    key={genre.id}
                    genre={genre}
                    onClick={handleGenreToggle}
                  />
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
              defaultValue={rating}
              marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              min={1}
              max={10}
              renderThumb={(props, state) => (
                <div key={`renderScore-${state.index}`} {...props}>
                  {state.valueNow}
                </div>
              )}
              pearling
              minDistance={1}
              onChange={(value) => setRating([...value])}
            />
          </div>

          <div className={styles.filter_children}>
            <p className={styles.filter_name}>Minimum Votes</p>
            <ReactSlider
              className="horizontal-slider-votes"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
              defaultValue={minimumVoteCounts}
              min={0}
              max={2000}
              renderThumb={(props, state) => (
                <div key={`thumb-${state.index}`} {...props}>
                  {state.valueNow}
                </div>
              )}
              pearling
              onChange={(value) => setMinimumVoteCounts(value)}
            />
          </div>
        </div>
      </FilterPanel>
    </div>
  );
}
