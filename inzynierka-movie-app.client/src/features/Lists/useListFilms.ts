import { useQuery } from "@tanstack/react-query";
import { getListFilms } from "../../services/apiLists";

export function useListFilms(url: string, type: string) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["listFilms", url, type],
    queryFn: () => getListFilms(type, url),
  });
  return { data, isPending, isError, error };
}
