import { useQuery } from "@tanstack/react-query";
import { getMovieProviders } from "../../services/apiWatchProviders";

export function useMovieWatchProviders(region: string) {
  const {
    data: movieProviders,
    isPending: movieProvidersIsPending,
    isError: movieProvidersIsError,
    error: movieProvidersError,
  } = useQuery({
    queryKey: ["movieWatchProviders", region],
    queryFn: () => getMovieProviders(region),
  });

  return {
    movieProviders,
    movieProvidersError,
    movieProvidersIsError,
    movieProvidersIsPending,
  };
}

export function useTVSeriesWatchProviders(region: string) {
  const {
    data: tvSeriesProviders,
    isPending: tvSeriesProvidersIsPending,
    isError: tvSeriesProvidersIsError,
    error: tvSeriesProvidersError,
  } = useQuery({
    queryKey: ["movieWatchProviders", region],
    queryFn: () => getMovieProviders(region),
  });

  return {
    tvSeriesProviders,
    tvSeriesProvidersIsPending,
    tvSeriesProvidersError,
    tvSeriesProvidersIsError,
  };
}
