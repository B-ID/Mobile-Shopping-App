import { supabase } from "@/lib/supabase";

const login = async (payload: { email: string; password: string }) => {
  const { data, error } = await supabase.auth.signInWithPassword(payload);
  if (error) throw error;
  return data;
};

const signUp = async (payload: { email: string; password: string }) => {
  const { data, error } = await supabase.auth.signUp(payload);
  if (error) throw error;
  return data;
};

export { login, signUp };
