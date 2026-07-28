import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import {login, register, logout, getMe} from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const {user, setUser, loading, setLoading} = context;

  const handleLogin = async ({email, password}) => {
    setLoading(true);
    try {
      const userData = await login({email, password});
      setUser(userData.user);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleRegister = async ({email, username, password}) => {
    setLoading(true);
    try {
      const newUser = await register({email, username, password});
      setUser(newUser.user);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return { user, setUser, loading, setLoading, handleLogin, handleRegister, handleLogout };
};
