import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBtx5R9JhOpHurP5OcKZxsZO83dHlWKLAM",
  authDomain: "ctic-b8f5a.firebaseapp.com",
  projectId: "ctic-b8f5a",
  storageBucket: "ctic-b8f5a.appspot.com",
  messagingSenderId: "965616022589",
  appId: "1:965616022589:web:11f3c2573eb030db09a654"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signIn with googleAuthProvider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' }); // fonction qui configure le lancement du popup
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider); //fonction de lancement du popup de google

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
