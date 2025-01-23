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

export type WatchlistItem = {
  databaseID: string;
  backdrop_path: string;
  genres: Genre[];
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
  user_rating: number;
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
  username: string;
  password: string;
};

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
};
