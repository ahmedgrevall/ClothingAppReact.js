import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_K6zEo9fOjv74qilHnJq3FHUIUBE0Vso",
  authDomain: "ecomrce-58b55.firebaseapp.com",
  databaseURL: "https://ecomrce-58b55.firebaseio.com",
  projectId: "ecomrce-58b55",
  storageBucket: "ecomrce-58b55.appspot.com",
  messagingSenderId: "919156175242",
  appId: "1:919156175242:web:8e0e37bf218f38a56f9873",
  measurementId: "G-XVMDKCPPDG",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
