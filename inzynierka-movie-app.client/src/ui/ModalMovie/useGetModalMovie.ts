import { useQuery } from "@tanstack/react-query";
import { getModalMovieApi } from "../../services/apiWatchlist";

export function useGetModalMovie(id: number, isMovie: boolean) {
  const {
    data: movieData,
    isLoading: isModalLoading,
    isError: isModalError,
    error: modalError,
  } = useQuery({
    queryKey: ["modalMovie", id, isMovie],
    queryFn: () => getModalMovieApi(id, isMovie),
  });

  return { movieData, isModalLoading, isModalError, modalError };
}
