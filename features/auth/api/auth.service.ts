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

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return true;
}

export { login, signUp, signOut };
