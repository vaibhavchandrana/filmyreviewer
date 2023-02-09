import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3W0Y0DdIz_rKeujwM-GEQUX39e6MM9Kk",
  authDomain: "moviereviewer-ba77a.firebaseapp.com",
  projectId: "moviereviewer-ba77a",
  storageBucket: "moviereviewer-ba77a.appspot.com",
  messagingSenderId: "551083884963",
  appId: "1:551083884963:web:5c3e63a8abca728ed51a16"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const moviesRef=collection(db,"movies")
export const reviewRef=collection(db,"reviews")
export const usersRef=collection(db,"users")
export default app;