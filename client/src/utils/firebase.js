
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interviewiq-ba6ba.firebaseapp.com",
//   projectId: "interviewiq-ba6ba",
//   storageBucket: "interviewiq-ba6ba.firebasestorage.app",
//   messagingSenderId: "862159592601",
//   appId: "1:862159592601:web:7308d702cd708076ddec08"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()

// export {auth , provider}


import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-92274.firebaseapp.com",
  projectId: "aiinterview-92274",
  storageBucket: "aiinterview-92274.firebasestorage.app",
  messagingSenderId: "1032104595404",
  appId: "1:1032104595404:web:debf584b2ba4ddbd27d769",
  measurementId: "G-CJRGMF0T2P"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider()
export{auth , provider}