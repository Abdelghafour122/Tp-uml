import { User, UserCredential } from "firebase/auth";

export enum Sexe {
  male = "Mâle",
  femelle = "Femelle",
}

export type Malade = {
  id: string;
  nom: string;
  preNom: string;
  age: number;
  sexe: Sexe;
};

export type Rendezvous = {
  id: string;
  dateRdv: Date;
};

export type AuthContextType = {
  currentUser: User | null | undefined;
  userSignUp: (email: string, password: string) => Promise<UserCredential>;
  userSignIn: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  userSignOut: () => Promise<void>;
  EMAIL_REGEX: RegExp;
};
