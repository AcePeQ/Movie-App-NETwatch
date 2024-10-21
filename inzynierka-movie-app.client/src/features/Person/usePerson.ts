import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../../services/apiPerson";

export function usePerson(id: string | null | undefined) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPerson(id),
  });

  return { data, isPending, isError, error };
}
