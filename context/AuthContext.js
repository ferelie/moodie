"use client";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObject, setUserDataObject] = useState({});
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setUserDataObject({});
    setCurrentUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
      } catch (error) {
        console.log(error.message);
      }
    });
    return unsubscribe;
  }, []);
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
