import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dailyblogs-ef3d9.firebaseapp.com",
  projectId: "dailyblogs-ef3d9",
  storageBucket: "dailyblogs-ef3d9.firebasestorage.app",
  messagingSenderId: "421744456195",
  appId: "1:421744456195:web:0d6c2488e75a2b71691436"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);