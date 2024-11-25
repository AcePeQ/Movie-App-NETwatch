import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMovieApi } from "../../services/apiWatchlist";

export function useDeleteMovie() {
  const { isPending: isDeletingMovie, mutate: deleteMovie } = useMutation({
    mutationFn: (data: { id: string; token: string }) => deleteMovieApi(data),
    onSuccess: (data) => {
      {
        toast.success("Successfully deleted movie");
        console.log(data);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeletingMovie, deleteMovie };
}
