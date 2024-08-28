import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMoviesDataBase";

export function useMovies() {
  const { isPending, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { isPending, data, error };
}
