import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  type Auth
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPVolB3mTySBHaHiHyy_szSS_6nXW-_TI",
  authDomain: "bloom-db-1ccff.firebaseapp.com",
  projectId: "bloom-db-1ccff",
  storageBucket: "bloom-db-1ccff.firebasestorage.app",
  messagingSenderId: "446900434348",
  appId: "1:446900434348:web:391b3b132e27449d6ff609",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: { uid?: any; displayName?: any; email?: any; }, additionalInformation:any = {}) => {
  
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email: any, password: any) =>{
  if(!email || !password)return;
  
  return await createUserWithEmailAndPassword(auth, email, password )
}