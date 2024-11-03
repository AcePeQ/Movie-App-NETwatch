import { useQuery } from "@tanstack/react-query";
import { getRegions } from "../../services/apiLists";

export function useRegions() {
  const {
    data: regionsData,
    isPending: isPendingRegions,
    isError: isErrorRegions,
    error: errorRegions,
  } = useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
  });

  return { regionsData, isPendingRegions, isErrorRegions, errorRegions };
}
