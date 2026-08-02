// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// // This is used for authentication context provider, which will be used to provide authentication state and functions to the rest of the application.
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const authContextValue = {
//         user,
//         loading,
//         setUser,
//         setLoading,
//     };

//   return (
//     <AuthContext.Provider value={{ user, loading, setUser, setLoading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentials) => {
    setLoading(true);
    try {
      // 1. Call your API here (e.g., const response = await api.login(credentials);)
      // 2. Set the authenticated user object in state
      const loggedInUser = { email: credentials.email }; 
      setUser(loggedInUser);
      return loggedInUser;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      // 1. Call your API here
      // 2. Set user upon registration
      const registeredUser = { username: data.username, email: data.email };
      setUser(registeredUser);
      return registeredUser;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
