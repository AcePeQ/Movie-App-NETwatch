import { useMutation } from "@tanstack/react-query";
import { loginAccountApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";
import { LoginUser } from "../../utils/types";

export function useLoginAccount() {
  const { isPending: isLoggingIn, mutate: loginAccount } = useMutation({
    mutationFn: (loginData: LoginUser) => loginAccountApi(loginData),
    onSuccess: () => {
      toast.success("Successfully logged in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoggingIn, loginAccount };
}
