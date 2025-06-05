import { useRef } from "react";
import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/Firebase/Firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocFromAuth(user)
    const userDocRef = await createUserDocFromAuth(user)
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
