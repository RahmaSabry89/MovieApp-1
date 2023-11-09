import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoTjXzV7T5OM2dOG9jJLK3DnFRx1hQdZM",
  authDomain: "movieapp-7d6be.firebaseapp.com",
  projectId: "movieapp-7d6be",
  storageBucket: "movieapp-7d6be.appspot.com",
  messagingSenderId: "1016728433443",
  appId: "1:1016728433443:web:5d33bf1e78c098777a1296",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
