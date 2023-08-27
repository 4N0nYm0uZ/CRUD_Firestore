import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8qwGAkLm1kTPS1HJ2Y3R9NuBBz3UuysY",
    authDomain: "crud-firestore-71c9c.firebaseapp.com",
    projectId: "crud-firestore-71c9c",
    storageBucket: "crud-firestore-71c9c.appspot.com",
    messagingSenderId: "849824097005",
    appId: "1:849824097005:web:f9a30789537e8df99b22e4",
    measurementId: "G-T2T1QYZSCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const Db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export default Db;
