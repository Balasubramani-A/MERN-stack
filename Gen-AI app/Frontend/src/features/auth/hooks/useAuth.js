import { useContext } from "react";
import { AuthContext } from "../auth/auth.context.jsx";

export const useAuth = () => {
  return useContext(AuthContext);
};
