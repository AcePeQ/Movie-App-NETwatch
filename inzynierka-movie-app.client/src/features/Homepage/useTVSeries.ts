import { useQuery } from "@tanstack/react-query";
import { getTVSeries } from "../../services/apiTVSeries";

export function useTVSeries() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["tvSeries"],
    queryFn: getTVSeries,
  });

  return { isPending, isError, error, data };
}
