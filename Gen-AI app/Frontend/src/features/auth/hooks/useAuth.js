// import { useContext } from "react";
// import { AuthContext } from "../auth.context.jsx";
// import {login, register, logout, getMe} from "../services/auth.api.js";

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   const {user, setUser, loading, setLoading} = context;

//   const handleLogin = async ({email, password}) => {
//     setLoading(true);
//     try {
//       const userData = await login({email, password});
//       setUser(userData.user);
//     } catch (error) {
//       console.error("Login failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleRegister = async ({email, username, password}) => {
//     setLoading(true);
//     try {
//       const newUser = await register({email, username, password});
//       setUser(newUser.user);
//     } catch (error) {
//       console.error("Registration failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       await logout();
//       setUser(null);
//     } catch (error) {
//       console.error("Logout failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { user, setUser, loading, setLoading, handleLogin, handleRegister, handleLogout };
// };


// hooks/useAuth.js
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, register, logout, getMe } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const userData = await login({ email, password });
      setUser(userData.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Re-throw so handleSubmit catches it
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ email, username, password }) => {
    setLoading(true);
    try {
      const newUser = await register({ username, email, password });
      setUser(newUser.user);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const userData = await getMe();
          setUser(userData.user);
          
        } catch (error) {
          console.error("Failed to fetch user:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    }, []);

  return { user, setUser, loading, setLoading, handleLogin, handleRegister, handleLogout };
};