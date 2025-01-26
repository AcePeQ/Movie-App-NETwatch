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

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { useEffect, useRef, useState } from "react";
import { useRegions } from "../useRegions";
import { useTVSeriesWatchProviders } from "../useWatchProviders";
import { useTVSeriesGenres } from "../useGenres";
import { Genre, RegionType, RegionwatchProvider } from "../../../utils/types";

polyfillCountryFlagEmojis();

const sortOptions = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "vote_count.desc", label: "Votes Descending" },
  { value: "vote_count.asc", label: "Votes Ascending" },
  { value: "first_air_date.desc", label: "First Air Date Descending" },
  { value: "first_air_date.asc", label: "First Air Date Ascending" },
  { value: "title.desc", label: "Title (A-Z)" },
  { value: "title.asc", label: "Title (Z-A)" },
];

export default function SidebarTvSeries({
  onUpdateUrl,
}: {
  onUpdateUrl: (url: string) => void;
}) {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [selectedRegion, setSelectedRegion] = useState({
    value: "GB",
    label: `${getFlagEmoji("GB")} United Kingdom`,
  });
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [releaseDateRange, setReleaseDateRange] = useState([1890, year]);
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
    tvSeriesProviders,
    tvSeriesProvidersIsPending,
    tvSeriesProvidersError,
    tvSeriesProvidersIsError,
  } = useTVSeriesWatchProviders(selectedRegion.value);

  const { genresData, isPendingGenres, isErrorGenres, errorGenres } =
    useTVSeriesGenres();

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("air_date.gte", `${releaseDateRange[0]}-01-01`);
    params.append("air_date.lte", `${releaseDateRange[1]}-${month}-${day}`);
    params.append("sort_by", `${sortBy}`);
    params.append("vote_average.gte", `${rating[0]}`);
    params.append("vote_average.lte", `${rating[1]}`);
    params.append("vote_count.gte", `${minimumVoteCounts}`);
    params.append("watch_region", `${selectedRegion.value}`);
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
    month,
    day,
  ]);

  if (isPendingRegions) {
    return <Loading />;
  }

  if (isErrorRegions || tvSeriesProvidersIsError || isErrorGenres) {
    return (
      <ErrorFull
        error={errorRegions || tvSeriesProvidersError || errorGenres}
      />
    );
  }

  const regions = regionsData.results;
  const genres = genresData?.genres;
  const watchProviders = tvSeriesProviders?.results;

  const optionRegions = regions.map((item: RegionType) => {
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
            onChange={(newValue) => {
              if (newValue) setSortBy(newValue.value);
            }}
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
            onChange={(newValue) => {
              if (newValue) {
                setSelectedRegion(newValue);
                setSelectedProvides([]);
                checkedProvidersRef.current.clear();
              }
            }}
          />

          {tvSeriesProvidersIsPending ? (
            <LoaderSmall />
          ) : (
            <ul className={styles.watchProviders}>
              {watchProviders.map((provider: RegionwatchProvider) => (
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
              max={year}
              renderThumb={(props, state) => {
                const { key, ...restProps } = props;
                return (
                  <div key={`thumb-date-${state.index}-${key}`} {...restProps}>
                    {state.valueNow}
                  </div>
                );
              }}
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
              <ul className={styles.filter_genresTv}>
                {genres?.map((genre: Genre) => (
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
              renderThumb={(props, state) => {
                const { key, ...restProps } = props;
                return (
                  <div key={`thumb-rate-${state.index}-${key}`} {...restProps}>
                    {state.valueNow}
                  </div>
                );
              }}
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
              renderThumb={(props, state) => {
                const { key, ...restProps } = props;
                return (
                  <div key={`thumb-vote-${state.index}-${key}`} {...restProps}>
                    {state.valueNow}
                  </div>
                );
              }}
              pearling
              onChange={(value) => setMinimumVoteCounts(value)}
            />
          </div>
        </div>
      </FilterPanel>
    </div>
  );
}
