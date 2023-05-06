import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCoin41vytm_AjIVJndPHKM7t98LEJIpc4",
  authDomain: "chatterbox-275a7.firebaseapp.com",
  projectId: "chatterbox-275a7",
  storageBucket: "chatterbox-275a7.appspot.com",
  messagingSenderId: "1012199924296",
  appId: "1:1012199924296:web:d5a4b4da38e6f5126eee7d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const googleAuth = new GoogleAuthProvider();