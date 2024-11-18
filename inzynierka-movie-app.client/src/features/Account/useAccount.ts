import { useQuery } from "@tanstack/react-query";
import { getAccount } from "../../services/apiAccount";

export function useAccount(username: string | undefined) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userAccount", username],
    queryFn: () => getAccount(username),
  });

  return { data, isLoading, isError, error };
}
