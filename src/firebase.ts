import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as fbSignOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2Hyj1EtGudoF1iIFIvvuxM5CJ_4Q6-VM",
  authDomain: "trip-planner-cde86.firebaseapp.com",
  projectId: "trip-planner-cde86",
  storageBucket: "trip-planner-cde86.firebasestorage.app",
  messagingSenderId: "754142749377",
  appId: "1:754142749377:web:c5412555cf15ec34c1ea40"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { onAuthStateChanged, signInWithPopup, fbSignOut };
export { doc, setDoc, onSnapshot, getDoc };
export type { User };
