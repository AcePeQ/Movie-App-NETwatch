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
