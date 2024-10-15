import { useQuery } from "@tanstack/react-query";
import { getCredits } from "../../services/apiCredits";

export function useCredits(type: string | undefined, id: string | undefined) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["credits", type, id],
    queryFn: () => getCredits(type, id),
  });

  return { data, isPending, isError, error };
}
