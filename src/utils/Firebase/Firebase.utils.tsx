import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPVolB3mTySBHaHiHyy_szSS_6nXW-_TI",
  authDomain: "bloom-db-1ccff.firebaseapp.com",
  projectId: "bloom-db-1ccff",
  storageBucket: "bloom-db-1ccff.firebasestorage.app",
  messagingSenderId: "446900434348",
  appId: "1:446900434348:web:391b3b132e27449d6ff609",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Initialize DB
export const db = getFirestore()

export const createUserDocFromAuth = async(userAuth) =>{
  const userDocref = doc(db, 'user', userAuth.uid)
  console.log(userDocref)

  const userSnapshot = await getDoc(userDocref);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date()

    try{
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt
      });
    }catch (error){
      console.log(error)
    }
  }

  return userDocref
    

}