import { useMutation } from "@tanstack/react-query";
import { createAccountApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";
import { RegisterUser } from "../../utils/types";

export function useCreateAccount() {
  const { mutate: createAccount, isPending: isCreatingAccount } = useMutation({
    mutationFn: (accountData: RegisterUser) => createAccountApi(accountData),
    onSuccess: () => {
      toast.success("Successfully registered");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createAccount, isCreatingAccount };
}
