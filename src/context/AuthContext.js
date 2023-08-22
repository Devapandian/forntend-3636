import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getAuth,
  signInWithPopup

} from "firebase/auth";
import { auth } from "../components/firebase";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  const auth = getAuth(); // Get the auth instance

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Update the user state with the signed-in user data
      localStorage.setItem("email", result.user.email);
      navigate("/Dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
      }
    });
    return unsubscribe;
  }, []);
  

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
