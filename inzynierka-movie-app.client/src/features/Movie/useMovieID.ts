import { useQuery } from "@tanstack/react-query";
import { getMovieID } from "../../services/apiMovies";

export function useMovieID(id) {
  const { isError, error, isPending, data } = useQuery({
    queryKey: ["movieID", id],
    queryFn: () => getMovieID(id),
  });

  return { isError, error, isPending, data };
}
