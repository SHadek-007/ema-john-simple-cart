// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNDNS1GYuUHlFSmef8mMVb84-crj6qz0k",
  authDomain: "ema-john-simple-m59-62910.firebaseapp.com",
  projectId: "ema-john-simple-m59-62910",
  storageBucket: "ema-john-simple-m59-62910.appspot.com",
  messagingSenderId: "237591836911",
  appId: "1:237591836911:web:e664772af186ef8e3fc31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;