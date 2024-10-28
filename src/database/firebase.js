import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYO7RdR2aJdd1ePqxcxgo05S-4pP0m43I",
    authDomain: "contactapp-72c11.firebaseapp.com",
    projectId: "contactapp-72c11",
    storageBucket: "contactapp-72c11.appspot.com",
    messagingSenderId: "900715653086",
    appId: "1:900715653086:web:d76bc833648f3b2a835f4f",
    measurementId: "G-4DWJDCXXBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const Db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export default Db;
