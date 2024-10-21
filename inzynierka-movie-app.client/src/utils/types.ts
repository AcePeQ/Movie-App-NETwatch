import { ReactNode } from "react";

/*General Types and Interfaces*/
export type HeroItemType = {
  backdrop_path: string;
  first_air_date: string | null;
  genres_ids: [] | null;
  genre_ids: [] | null;
  id: number;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  vote_average: number;
  media_type: string;
};

export type ItemType = {
  backdrop_path: string;
  first_air_date: string | null;
  genre_ids: [];
  id: number;
  media_type: string;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  vote_count: number;
  title: string | null;
  vote_average: number;
};

export type ItemFullType = {
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  genres: [];
  vote_count: number;
  overview: string;
  status: string;
  origin_country: string[];
  release_date: string | null;
  media_type: string;
  title: string | null;
  runtime: number;
  name: string | null;
  first_air_date: string | null;
  last_air_date: string | null;
  number_of_episodes: number;
  number_of_seasons: number;
};

export type VideoType = {
  key: string;
  name: string;
  official: boolean;
  site: string;
  type: string;
};

export type CastType = {
  profile_path: string;
  name: string;
  character: string;
  known_for_department: string;
  id: number;
  roles: [];
};

export type ShowType = {
  backdrop_path: string;
  first_air_date: string | null;
  genre_ids: [];
  id: number;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  vote_average: number;
  media_type: string;
  vote_count: number;
};

export type SeasonType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string;
  season_number: number;
};

/*Interfaces and Types for Credits*/
export interface Data {
  credits: Credits;
  details: Details;
}

export interface Details {
  poster_path: string;
  id: number;
  release_date: string;
  first_air_date: string;
  name: string;
  title: string;
}

export interface Credits {
  cast: Cast;
  crew: Crew;
}

export interface Cast {
  map(arg0: (cast: Cast) => import("react/jsx-runtime").JSX.Element): ReactNode;
  length: ReactNode;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
  roles: Role[];
}

export interface Crew {
  map(
    arg0: (
      crew: Crew,
      index: Key | null | undefined
    ) => import("react/jsx-runtime").JSX.Element
  ): ReactNode;
  filter(arg0: (person: Crew) => boolean): Crew;
  length: ReactNode;
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  jobs: Job[];
  job: string;
  department: string;
}

export interface Role {
  character: string;
  episode_count: number;
  total_episode_count: number;
}

export interface Job {
  job: string;
  episode_count: number;
}

export type Person = {
  birthday: string;
  known_for_department: string;
  deathday: string | null;
  gender: number;
  name: string;
  place_of_birth: string;
  profile_path: string;
  biography: string;
  combined_credits: PersonCredits;
};

interface PersonCredits {
  cast: PersonDetails[];
  crew: PersonDetails[];
}

export interface PersonDetails {
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string | null;
  title: string | null;
  popularity: number;
}
