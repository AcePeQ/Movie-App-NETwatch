import { useMutation } from "@tanstack/react-query";
import { createAccountApi } from "../../services/apiAuthentication";
import { RegisterAccountTypes } from "../../utils/types";
import toast from "react-hot-toast";

export function useCreateAccount() {
  const { mutate: createAccount, isPending: isCreatingAccount } = useMutation({
    mutationFn: (accountData: RegisterAccountTypes) =>
      createAccountApi(accountData),
    onSuccess: () => {
      toast.success("Successfully registered");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createAccount, isCreatingAccount };
}
