// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // Keep this import

const firebaseConfig = {
    apiKey: "AIzaSyAsHvWoe4vIiv1FpAhT4nVp1adxYTWYnr4",
    authDomain: "polenia-ca25e.firebaseapp.com",
    projectId: "polenia-ca25e",
    storageBucket: "polenia-ca25e.appspot.com",
    messagingSenderId: "840388966978",
    appId: "1:840388966978:web:9022f06c9c6e91ddedcbdb",
    measurementId: "G-HZMR2426J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only on the client-side
if (typeof window !== "undefined") {
    getAnalytics(app); // Call it directly without assigning it to a variable
}

export { db };
