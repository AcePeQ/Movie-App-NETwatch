import { useQuery } from "@tanstack/react-query";
import { getAccount } from "../../services/apiAccount";

export function useAccount(
  username: string | undefined,
  userID: string | undefined | null = ""
) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userAccount", username],
    queryFn: () => getAccount(username, userID),
  });

  return { data, isLoading, isError, error };
}
