import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,FacebookAuthProvider,GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAKz1Fdf8y8QEv_N5vUaX9RWlfkX53iWaA",
  authDomain: "fir-3f53e.firebaseapp.com",
  projectId: "fir-3f53e",
  storageBucket: "fir-3f53e.appspot.com",
  messagingSenderId: "246231238781",
  appId: "1:246231238781:web:5dc51fcd94bf19e2494914"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {auth, googleProvider,githubProvider,facebookProvider}