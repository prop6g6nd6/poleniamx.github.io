import React from 'react';
import EmailInput from '../components/EmailInput'; // Import the EmailInput component

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <EmailInput />
        </div>
    );
}
