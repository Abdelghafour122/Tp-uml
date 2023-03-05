import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAt3ScNcTBUFXmdyLzgjom2_LZg8BtHQic",
  //   authDomain: "tp-uml.firebaseapp.com",
  //   projectId: "tp-uml",
  //   storageBucket: "tp-uml.appspot.com",
  //   messagingSenderId: "1045096350531",
  //   appId: "1:1045096350531:web:fea378a08f913a60b4a5f6",
  //   apiKey: import.meta,

  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
