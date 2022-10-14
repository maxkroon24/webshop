import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaBLC8MxVlgls373h8AM-LAA97Gkxzpeg",
  authDomain: "ecommerce-3db8f.firebaseapp.com",
  projectId: "ecommerce-3db8f",
  storageBucket: "ecommerce-3db8f.appspot.com",
  messagingSenderId: "720745184274",
  appId: "1:720745184274:web:571de727a09146fcd4eccb",
  measurementId: "G-08673G83EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)