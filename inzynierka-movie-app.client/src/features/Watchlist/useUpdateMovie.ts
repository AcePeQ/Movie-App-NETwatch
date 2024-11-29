import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateMovieApi } from "../../services/apiWatchlist";
import { useAppDispatch } from "../../hooks/useRedux";
import { updateWatchlist } from "../Authentication/userSlice";

interface MovieType {
  id: number;
  user_status: string | undefined;
  user_rating: number | undefined | null;
  watched_episodes: number | undefined;
}

export function useUpdateMovie() {
  const dispatch = useAppDispatch();

  const { isPending: isUpdatingMovie, mutate: updateMovie } = useMutation({
    mutationFn: (data: { movie: MovieType; token: string }) =>
      updateMovieApi(data),
    onSuccess: (data) => {
      {
        toast.success("Successfully updated movie");
        dispatch(updateWatchlist(data));
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdatingMovie, updateMovie };
}
