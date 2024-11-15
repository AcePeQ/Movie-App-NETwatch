import { useMutation } from "@tanstack/react-query";
import { createAccountApi } from "../../services/apiAuthentication";

export function useCreateAccount() {
  const { mutate: createAccount, isPending: isCreatingAccount } = useMutation({
    mutationFn: (accountData) => createAccountApi(accountData),
    onSuccess: () => {
      console.log("Done");
    },
    onError: (error) => {
      console.log("Wrong");
      console.log(error.message);
    },
  });

  return { createAccount, isCreatingAccount };
}
