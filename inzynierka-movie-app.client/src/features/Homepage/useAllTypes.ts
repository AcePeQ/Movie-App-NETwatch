import { useQuery } from "@tanstack/react-query";
import { getAllTypes } from "../../services/apiAllTypes";

export function useAllTypes() {
  const { isPending, error, isError, data } = useQuery({
    queryKey: ["allTypes"],
    queryFn: getAllTypes,
  });

  return { isPending, error, isError, data };
}
