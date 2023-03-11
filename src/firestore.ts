import { collection, doc, addDoc, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { Rendezvous } from "./types";

export const rdvDatabase = getFirestore(app);
export const rdvCollection = collection(rdvDatabase, "rendezvous");

export const addRdv = (rdvData: Rendezvous) => {
  // await
};
