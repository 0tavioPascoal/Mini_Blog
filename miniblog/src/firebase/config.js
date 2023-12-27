
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDD9_Amqo6o9-5hoUgbatj4CxKweqdMrxM",
  authDomain: "mini-blog-b2d53.firebaseapp.com",
  projectId: "mini-blog-b2d53",
  storageBucket: "mini-blog-b2d53.appspot.com",
  messagingSenderId: "385120236588",
  appId: "1:385120236588:web:70e4cc4d3c66007c844d89"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };