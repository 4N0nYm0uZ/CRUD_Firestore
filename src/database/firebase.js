import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

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
export default app;

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase