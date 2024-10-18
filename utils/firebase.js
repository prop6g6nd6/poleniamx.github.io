// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Add collection and getDocs
import { getAnalytics } from "firebase/analytics";

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
    getAnalytics(app); 
}

// Function to retrieve products from Firestore
export const getProducts = async () => {
    const productsCollection = collection(db, 'productos'); // Access 'productos' collection
    const productSnapshot = await getDocs(productsCollection);
    
    const products = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return products; // Returns an array of product objects
};

export { db };
