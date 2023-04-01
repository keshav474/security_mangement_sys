
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy0wGCf_Pv7jOXdYhk_g5d2fnpGUlBMdc",
  authDomain: "securitysys-f6fdc.firebaseapp.com",
  projectId: "securitysys-f6fdc",
  storageBucket: "securitysys-f6fdc.appspot.com",
  messagingSenderId: "549921048378",
  appId: "1:549921048378:web:c802e8e78cf585465cb203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;