import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../../services/apiSearch";

export function useSearch(query) {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: async ({ signal }) => getSearch(query, signal),
  });

  return { data, isPending, error, isError };
}
