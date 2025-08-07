import { useMutation } from "@tanstack/react-query";
import { login, signUp } from "../api/auth.service";

export const useAuthMutations = () => {
  const signUpMutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signUp,
    onError(error) {
      console.log("sign up failed:", error.message);
    },
    onSuccess(data) {
      // console.log(data);
    },
  });

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onError(error) {
      console.error("Login failed:", error);
    },
    onSuccess(data) {
      // console.log(data);
    },
  });

  const signOutMutation = () => {};

  return {
    signUpMutation,
    loginMutation,
    signOutMutation,
  };
};
