import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { useMutation } from "@tanstack/react-query";
import { deleteAccountApi } from "../../services/apiSettings";
import toast from "react-hot-toast";
import { logout } from "../Authentication/userSlice";

export function useDeleteAccount() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isPending: isDeleting, mutate: deleteAccount } = useMutation({
    mutationFn: (token: string) => deleteAccountApi(token),
    onSuccess: () => {
      toast.success("Successfully changed settings");
    },
    onError: (error) => {
      toast.error(error.message);
      dispatch(logout());
      navigate("/", { replace: true });
    },
  });

  return { isDeleting, deleteAccount };
}
