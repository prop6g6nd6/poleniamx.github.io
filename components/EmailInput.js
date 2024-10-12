// components/EmailInput.js
import React, { useState } from 'react'; 
import { db } from '../utils/firebase'; 
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import { Button } from "@/components/ui/button";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError(false);

    try {
      const q = query(collection(db, "emails"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("This email is already subscribed!");
        setError(true);
        return;
      }

      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      setMessage("Thank you for subscribing!");
      console.log("Email stored with ID: ", docRef.id);
    } catch (e) {
      setMessage("Error occurred while submitting. Please try again.");
      setError(true);
      console.error("Error adding document: ", e);
    }

    setEmail("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded-md p-2 mb-4"
            placeholder="Enter your email"
          />
          <Button 
          type="submit" 
          >
            Subscribe
          </Button>
        </form>
        {message && (
          <p style={{ color: error ? "red" : "green" }} className="mt-2">{message}</p>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
