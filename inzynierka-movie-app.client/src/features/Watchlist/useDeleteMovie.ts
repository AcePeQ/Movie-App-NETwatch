import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMovieApi } from "../../services/apiWatchlist";
import { updateWatchlist } from "../Authentication/userSlice";
import { useAppDispatch } from "../../hooks/useRedux";

export function useDeleteMovie() {
  const dispatch = useAppDispatch();

  const { isPending: isDeletingMovie, mutate: deleteMovie } = useMutation({
    mutationFn: (data: { id: number; token: string }) => deleteMovieApi(data),
    onSuccess: (data) => {
      {
        toast.success("Successfully deleted movie");
        dispatch(updateWatchlist(data));
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeletingMovie, deleteMovie };
}
