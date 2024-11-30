import { useQuery } from "@tanstack/react-query";
import { getUserWatchlistApi } from "../../services/apiWatchlist";

export function useUserWathclist(username: string | undefined) {
  const {
    data: watchlist,
    isLoading: isLoadingWatchlist,
    isError: isErrorWatchlist,
    error: watchlistError,
  } = useQuery({
    queryKey: ["userWatchlist", username],
    queryFn: () => getUserWatchlistApi(username),
    refetchOnMount: "always",
  });

  return { watchlist, isLoadingWatchlist, isErrorWatchlist, watchlistError };
}
