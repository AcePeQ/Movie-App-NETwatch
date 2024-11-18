import { useQueryClient } from "@tanstack/react-query";

export const useGetFetchQuery = <T>(name: string[]): T => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueriesData(name)?.[0]?.[1];
  return data as T;
};
