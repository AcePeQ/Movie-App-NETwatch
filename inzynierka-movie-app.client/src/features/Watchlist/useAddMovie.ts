import { useMutation } from "@tanstack/react-query";
import { addMovieApi } from "../../services/apiWatchlist";
import { WatchListUser } from "../../utils/types";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../hooks/useRedux";
import { updateWatchlist } from "../Authentication/userSlice";

export function useAddMovie() {
  const dispatch = useAppDispatch();

  const { isPending: isAddingMovie, mutate: addMovie } = useMutation({
    mutationFn: (data: { selectedMovie: WatchListUser; token: string }) =>
      addMovieApi(data),
    onSuccess: (data) => {
      {
        console.log(data);
        toast.success("Successfully added movie");
        dispatch(updateWatchlist(data));
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isAddingMovie, addMovie };
}
