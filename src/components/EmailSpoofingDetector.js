import React, { useState } from 'react';

const EmailSpoofingDetector = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState('');

    const detectSpoofing = (email) => {
        // Simple check for spoofed email (placeholder for actual implementation)
        if (email.includes('@example.com')) {
            return 'The email appears to be legitimate.';
        }
        return 'The email might be spoofed.';
    };

    const handleCheck = () => {
        setResult(detectSpoofing(email));
    };

    return (
        <div className="container">
            <h2>Email Spoofing Detector</h2>
            <input
                type="email"
                placeholder="Enter email to check"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleCheck}>Check</button>
            {result && <p>{result}</p>}
        </div>
    );
};

export default EmailSpoofingDetector;
