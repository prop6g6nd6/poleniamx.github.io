// components/EmailInput.js
import React, { useState } from 'react';

const EmailInput = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission (e.g., send it to an API)
        console.log('Email submitted:', email);
        setEmail(''); // Clear the input field after submission
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded mb-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Subscribe
            </button>
        </form>
    );
};

export default EmailInput;
