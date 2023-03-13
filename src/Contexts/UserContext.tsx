import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { globalAuth } from "../firebase";
import { AuthContextType } from "../types";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthenticationContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function useAuthContext() {
  return useContext(AuthenticationContext);
}

const UserContext = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const userSignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const userSignIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const userSignOut = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unlog = globalAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unlog;
  }, []);

  const userContextValue: AuthContextType = {
    currentUser,
    userSignUp,
    userSignIn,
    signInWithGoogle,
    userSignOut,
    EMAIL_REGEX,
  };
  return (
    <AuthenticationContext.Provider value={userContextValue}>
      {loading === false && children}
    </AuthenticationContext.Provider>
  );
};

export default UserContext;
