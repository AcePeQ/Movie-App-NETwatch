import { useQueryClient } from "@tanstack/react-query";

export function useCachedQueryData(key: string) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData([key]);

  return data;
}
