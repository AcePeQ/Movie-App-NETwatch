import { useQuery } from "@tanstack/react-query";
import { getMovieGenres, getTVSeriesGenres } from "../../services/apiLists";

export function useMovieGenres() {
  const {
    data: genresData,
    isPending: isPendingGenres,
    isError: isErrorGenres,
    error: errorGenres,
  } = useQuery({
    queryKey: ["movieGenres"],
    queryFn: getMovieGenres,
  });

  return { genresData, isPendingGenres, isErrorGenres, errorGenres };
}

export function useTVSeriesGenres() {
  const {
    data: genresData,
    isPending: isPendingGenres,
    isError: isErrorGenres,
    error: errorGenres,
  } = useQuery({
    queryKey: ["tvSeriesGenres"],
    queryFn: getTVSeriesGenres,
  });

  return { genresData, isPendingGenres, isErrorGenres, errorGenres };
}
