import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateMovieApi } from "../../services/apiWatchlist";

interface MovieType {
  id: number;
  user_status: string;
  user_rating: number;
  watched_episodes: number;
}

export function useUpdateMovie() {
  const { isPending: isUpdatingMovie, mutate: updateMovie } = useMutation({
    mutationFn: (data: { movie: MovieType; token: string }) =>
      updateMovieApi(data),
    onSuccess: (data) => {
      {
        toast.success("Successfully updated movie");
        console.log(data);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdatingMovie, updateMovie };
}
