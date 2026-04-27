import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as fbSignOut,
  onAuthStateChanged,
  indexedDBLocalPersistence,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  User
} from 'firebase/auth';
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

// Persistência explícita: indexedDB primeiro (resiste a ITP do iOS),
// localStorage como fallback. browserPopupRedirectResolver é necessário
// para o getRedirectResult funcionar em iOS Chrome com ITP ativo.
export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
  popupRedirectResolver: browserPopupRedirectResolver,
});

export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { onAuthStateChanged, signInWithPopup, signInWithRedirect, getRedirectResult, fbSignOut };
export { doc, setDoc, onSnapshot, getDoc };
export type { User };
