import { useMutation } from "@tanstack/react-query";
import { updateSettingsApi } from "../../services/apiSettings";
import { UserSettings } from "../../utils/types";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const { isPending: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: ({
      settings,
      token,
    }: {
      settings: UserSettings;
      token: string;
    }) => updateSettingsApi(settings, token),
    onSuccess: () => {
      toast.success("Successfully changed settings");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateSettings };
}
