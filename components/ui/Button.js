// components/ui/Button.js
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
