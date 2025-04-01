import { ReactNode } from "react";

export type GeneralProductionItem = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  overview: string;
  poster_path: string;
  name: string;
  title: string;
  vote_average: number;
  media_type: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
};

export type CardItem = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  overview: string;
  poster_path: string;
  name: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type FullItemFull = {
  backdrop_path: string;
  poster_path: string;
  name: string | null;
  title: string | null;
  vote_average: number;
  genres: [];
  vote_count: number;
  overview: string;
  status: string;
  origin_country: string[];
  release_date: string | null;
  media_type: string;
  runtime: number;
  first_air_date: string | null;
  last_air_date: string | null;
  number_of_episodes: number;
  number_of_seasons: number;
};

export type WatchlistItem = {
  databaseID: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  poster_path: string;
  vote_average: number;
  title: string;
  name: string;
  runtime: number;
  status: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
  user_status: string;
  watched_episodes: number;
  user_rating: number | undefined;
};

export type FullWatchlistItem = {
  backdrop_path: string;
  databaseID: string;
  genre_ids: number[];
  first_air_date: string;
  id: number;
  media_type: string;
  name: string | null;
  poster_path: string;
  release_date: string | null;
  runtime: number;
  status: string;
  title: string | null;
  user_rating: number;
  user_status: string;
  vote_average: number;
  vote_count: number;
  watched_episodes: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type UpdateUser = {
  username: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type LoginUserSlice = {
  user: User;
  token: string;
};

interface User {
  username: string;
  watchlist: WatchlistItem[];
}

export type RegisterUser = {
  username: string;
  password: string;
  email: string;
  confirmed_password: string;
};

export type CastType = {
  character: string;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
};

export type VideoType = {
  key: string;
  type: string;
  site: string;
  official: boolean;
  name: string;
};

export type FullMovie = {
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  origin_country: string[];
  origin_language: string;
  overview: string;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type FullCastType = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  popularity: number;
  title: string | null;
  vote_average: number;
};

export type ProductionCompany = {
  name: string;
  logo_path: string | null;
};

export type FullTVSeries = {
  backdrop_path: string;
  created_by: Creator[];
  first_air_date: string;
  last_air_date: string;
  networks: NetworkType[];
  number_of_episodes: number;
  number_of_seasons: number;
  genres: Genre[];
  homepage: string;
  origin_country: string[];
  origin_language: string;
  overview: string;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  vote_average: number;
  vote_count: number;
  seasons: SeasonType[];
};

interface Creator {
  name: string;
}

export type NetworkType = {
  id: number;
  logo_path: string;
  name: string;
};

export type SeasonType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string;
  season_number: number;
};

export type PersonType = {
  biography: string;
  gender: number;
  birthday: string;
  deathday: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
  combined_creadits: CombinedCredits;
};

interface CombinedCredits {
  cast: PersonProduction[];
  crew: PersonProduction[];
}

interface PersonProduction {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  name: string;
  media_type: string;
  popularity: string;
  vote_average: string;
}

export type RegionwatchProvider = {
  provider_id: number;
  provider_name: string;
  logo_path: string;
};

export type RegionType = {
  iso_3166_1: string;
  english_name: string;
};

export type CrewType = {
  length: ReactNode;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  jobs: JobType[];
  job: string;
  department: string;
};

export type JobType = {
  job: string;
  episode_count: number;
};

export type CastPersonType = {
  length: ReactNode;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
  roles: RoleType[];
};

export type RoleType = {
  character: string;
  episode_count: number;
  total_episode_count: number;
};

export type DataCredits = {
  credits: CreditsType;
  details: DetailsType;
};

interface CreditsType {
  cast: CastPersonType[];
  crew: CrewType[];
}

export type DetailsType = {
  poster_path: string;
  id: number;
  release_date: number;
  first_air_date: string;
  name: string;
  title: string;
};

export type WatchProviders = Record<string, WatchProviderDetails>;

export type WatchProviderDetails = {
  link: string;
  flatrate: WatchProviderItem[];
  buy: WatchProviderItem[];
  rent: WatchProviderItem[];
};

export type WatchProviderItem = {
  provider_name: string;
  logo_path: string;
};

export type SidebarOptionsType = {
  value: string;
  label: string;
};
