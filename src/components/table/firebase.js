import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-Q3OheHE-dZ4CJQo9Rb19lxZPAkxNWts",
  authDomain: "table-4b255.firebaseapp.com",
  projectId: "table-4b255",
  storageBucket: "table-4b255.appspot.com",
  messagingSenderId: "537826188521",
  appId: "1:537826188521:web:ecafc57dba40a777d52478",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
