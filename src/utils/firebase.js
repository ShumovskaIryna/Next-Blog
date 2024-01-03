// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "panda-blog.firebaseapp.com",
  projectId: "panda-blog",
  storageBucket: "panda-blog.appspot.com",
  messagingSenderId: "691054332056",
  appId: "1:691054332056:web:b0dc3a3ab2494e12ea28ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);