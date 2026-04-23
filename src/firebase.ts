import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut as fbSignOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';

// ─── SUBSTITUA com as configurações do seu projeto Firebase ───────────────────
// Acesse: console.firebase.google.com → seu projeto → Configurações → Seus apps
const firebaseConfig = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxxxx"
};
// ─────────────────────────────────────────────────────────────────────────────

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { onAuthStateChanged, signInWithEmailAndPassword, signOut as fbSignOut, User };
export { doc, setDoc, onSnapshot, getDoc };
export type { User };
