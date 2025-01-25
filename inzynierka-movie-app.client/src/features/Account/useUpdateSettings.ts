import { useMutation } from "@tanstack/react-query";
import { updateSettingsApi } from "../../services/apiSettings";

import toast from "react-hot-toast";
import { useAppDispatch } from "../../hooks/useRedux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Authentication/userSlice";
import { UpdateUser } from "../../utils/types";

export function useUpdateSettings() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isPending: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: ({
      settings,
      token,
    }: {
      settings: UpdateUser;
      token: string;
    }) => updateSettingsApi(settings, token),
    onSuccess: () => {
      toast.success("Successfully changed settings");
    },
    onError: (error) => {
      toast.error(error.message);
      if (error.message !== "Invalid password format") {
        dispatch(logout());
        navigate("/", { replace: true });
      }
    },
  });

  return { isUpdating, updateSettings };
}
