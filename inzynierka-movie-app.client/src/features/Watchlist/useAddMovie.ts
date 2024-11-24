import { useMutation } from "@tanstack/react-query";
import { addMovieApi } from "../../services/apiWatchlist";
import { WatchListUser } from "../../utils/types";
import toast from "react-hot-toast";

export function useAddMovie() {
  const { isPending: isAddingMovie, mutate: addMovie } = useMutation({
    mutationFn: (data: { movie: WatchListUser; token: string }) =>
      addMovieApi(data),
    onSuccess: (data) => {
      {
        toast.success("Successfully added movie");
        console.log(data);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isAddingMovie, addMovie };
}
