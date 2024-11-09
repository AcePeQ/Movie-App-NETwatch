import { useInfiniteQuery } from "@tanstack/react-query";
import { getListFilms } from "../../services/apiLists";

export function useListFilms(url: string, type: string) {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["listFilms", url, type],
    queryFn: ({ pageParam = 1 }) => getListFilms(type, url, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false;
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
