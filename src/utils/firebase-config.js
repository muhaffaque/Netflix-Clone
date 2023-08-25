import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDtLpNRvVyHWn1abmvFeFRkEc1CY2WhmVQ",
  authDomain: "netflix-project-96f62.firebaseapp.com",
  projectId: "netflix-project-96f62",
  storageBucket: "netflix-project-96f62.appspot.com",
  messagingSenderId: "419309973796",
  appId: "1:419309973796:web:2aacf2e2659e825f13c3b1",
  measurementId: "G-YJDEG2R4XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)