import { createContext, useState } from "react";

export const AuthContext = createContext();

// This is used for authentication context provider, which will be used to provide authentication state and functions to the rest of the application.
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const authContextValue = {
        user,
        loading,
        setUser,
        setLoading,
    };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};


