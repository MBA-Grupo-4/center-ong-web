// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz2EK4F9DMXNSTGqrOEN_9YDGgV88R8Bo",
  authDomain: "central-ongs-web.firebaseapp.com",
  projectId: "central-ongs-web",
  storageBucket: "central-ongs-web.appspot.com",
  messagingSenderId: "977860508404",
  appId: "1:977860508404:web:b8796052beab6bc78bbca1",
  measurementId: "G-SPR0VW5PZX",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
