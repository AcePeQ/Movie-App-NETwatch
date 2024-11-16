import { useMutation } from "@tanstack/react-query";
import { loginAccountApi } from "../../services/apiAuthentication";
import { LoginAccountTypes } from "../../utils/types";
import toast from "react-hot-toast";

export function useLoginAccount() {
  const { isPending: isLoggingIn, mutate: loginAccount } = useMutation({
    mutationFn: (loginData: LoginAccountTypes) => loginAccountApi(loginData),
    onSuccess: () => {
      toast.success("Successfully logged in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoggingIn, loginAccount };
}
