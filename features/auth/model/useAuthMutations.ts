import { useMutation } from "@tanstack/react-query";
import { login, signOut, signUp } from "../api/auth.service";
import { showToast } from "@/utils";

export const useAuthMutations = () => {
  const signUpMutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signUp,
    onError(error) {
      showToast({
        title: "Error Signing Up",
        type: "danger",
        description: error.message || "An error occurred during sign up.",
      });
    },
    onSuccess(data) {
      showToast({
        title: "Sign up successful",
        type: "success",
        description:
          "Account created successfully. Please check your email to verify your account.",
      });
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

  const signOutMutation = useMutation({
    mutationKey: ["sign-out"],
    mutationFn: signOut,
    onError(error) {
      console.error("Sign out failed:", error);
    },
    onSuccess(data) {
      // console.log(data);
    },
  });

  return {
    signUpMutation,
    loginMutation,
    signOutMutation,
  };
};
