import { useQuery } from "@tanstack/react-query";

export function useTVSeries() {
  const {isPending, isError, error, data} = useQuery({
    queryKey: ["tvSeries"],
    queryFn: ,
  })

  return {isPending, isError, error, data}
}