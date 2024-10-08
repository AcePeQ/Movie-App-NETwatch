import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../../services/apiSearch";

export function useSearch(query) {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearch(query),
  });

  return { data, isPending, error, isError };
}
