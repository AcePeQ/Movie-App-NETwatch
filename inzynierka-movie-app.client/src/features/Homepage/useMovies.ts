import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMovies";

export function useMovies() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { isPending, data, isError, error };
}
