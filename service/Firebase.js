import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const config = {
   apiKey: "AIzaSyBmTJ7pEaK64yWPxPsOl2WuWBgEgCzjmN4",
  authDomain: "h3trivia.firebaseapp.com",
  projectId: "h3trivia",
  storageBucket: "h3trivia.appspot.com",
  messagingSenderId: "88099491010",
  appId: "1:88099491010:web:b973616e113a04cbedbf5b",
  measurementId: "G-0MNYBH58EM"
  };

initializeApp(config);
const db = getFirestore();

export default db;
