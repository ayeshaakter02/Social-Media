import { supabase } from "@/lib/supabase";

export const googleLogin = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};

export const logout = async () => {
  return await supabase.auth.signOut();
};