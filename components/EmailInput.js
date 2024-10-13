// components/EmailInput.js
import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
        setMessage("Este correo ya está registrado!");
        setError(true);
        return;
      }

      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      setMessage("Gracias por suscribirte");
      console.log("Email stored with ID: ", docRef.id);
    } catch (e) {
      setMessage("Error occurred while submitting. Please try again.");
      setError(true);
      console.error("Error adding document: ", e);
    }

    setEmail("");
  };

  return (
    <div className="flex flex-col items-center">
  <h2 className="text-xl mb-2 font-semibold text-center"
      style={{ fontFamily: 'Manrope, sans-serif' }}>
    Suscríbete a nuestro 
    <br /> 
    Newsletter 
  </h2>
  <p className="text-center text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
    Suscríbete para recibir un 20% de descuento en tu primera compra.
  </p>
  <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md p-4">
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      placeholder="Ingresa tu correo"
      className="mb-4"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    />
    <Button type="submit" className="w-full" style={{ fontFamily: 'Manrope, sans-serif' }}>
      Suscribirse
    </Button>
    {message && (
      <p style={{ color: error ? "red" : "green" }} className="mt-2 text-center">{message}</p>
    )}
  </form>
</div>

  );
};

export default EmailInput;
