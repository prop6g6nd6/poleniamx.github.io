import React from 'react';
import EmailInput from '../components/EmailInput'; // Import the EmailInput component

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Subscribe to Polenia's newsletter</h1>
            <EmailInput />
        </div>
    );
}
