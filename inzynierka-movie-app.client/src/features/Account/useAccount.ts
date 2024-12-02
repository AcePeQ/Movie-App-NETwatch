import { useQuery } from "@tanstack/react-query";
import { getAccountApi } from "../../services/apiAccount";

export function useAccount(username: string | undefined) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userAccount", username],
    queryFn: () => getAccountApi(username),
    refetchOnMount: "always",
  });

  return { data, isLoading, isError, error };
}
