import React, { useState } from 'react';

const PasswordChecker = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const checkPasswordStrength = (password) => {
        if (password.length < 6) {
            return 'Weak';
        } else if (password.length < 10) {
            return 'Moderate';
        } else {
            return 'Strong';
        }
    };

    const handleChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setStrength(checkPasswordStrength(newPassword));
    };

    return (
        <div className="container">
            <h2>Password Strength Checker</h2>
            <input 
                type="password" 
                value={password} 
                onChange={handleChange} 
                placeholder="Enter your password"
            />
            {strength && <p>Password strength: {strength}</p>}
        </div>
    );
};

export default PasswordChecker;
