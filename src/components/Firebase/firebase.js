import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCigh_dNpRVLSW8kWspuePTZ85_8o4boLk",
  authDomain: "clean-creation.firebaseapp.com",
  projectId: "clean-creation",
  storageBucket: "clean-creation.appspot.com",
  messagingSenderId: "87351322905",
  appId: "1:87351322905:web:901dcfd168a0068262bd88",
  measurementId: "G-STMV118HS9",
};

const FirebaseApp = () => {
  initializeApp(firebaseConfig);
}

export default FirebaseApp;
