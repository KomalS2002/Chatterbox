import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARcSvGHw0Bh5yRz0ydNrJA3eTm8-EZAZM",
  authDomain: "chatterbox-f2cc5.firebaseapp.com",
  projectId: "chatterbox-f2cc5",
  storageBucket: "chatterbox-f2cc5.appspot.com",
  messagingSenderId: "322663941465",
  appId: "1:322663941465:web:fdd51c2644652c9163f848"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();