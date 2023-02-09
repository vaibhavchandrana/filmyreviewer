import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const moviesRef=collection(db,"movies")
export const reviewRef=collection(db,"reviews")
export const usersRef=collection(db,"users")
export default app;