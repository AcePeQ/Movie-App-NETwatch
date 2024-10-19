import { useQuery } from "@tanstack/react-query";
import { getTVSeriesID } from "../../services/apiTVSeries";

export function useTVSeriesID(id: string | null | undefined) {
  const { isError, error, isPending, data } = useQuery({
    queryKey: ["tvseriesID", id],
    queryFn: () => getTVSeriesID(id),
  });

  return { isError, error, isPending, data };
}
