// firebase.utils.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3ZEPOy899XWc6AlCeNLpdj1BH-m2fwjQ",
  authDomain: "video-zen-2e1c9.firebaseapp.com",
  projectId: "video-zen-2e1c9",
  storageBucket: "video-zen-2e1c9.appspot.com",
  messagingSenderId: "975994321590",
  appId: "1:975994321590:web:a2f239ded81a2bf00e0417",
  measurementId: "G-F2KEQP1SP9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
