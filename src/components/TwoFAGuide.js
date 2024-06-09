import React from 'react';

const TwoFAGuide = () => {
    return (
        <div className="container">
            <h2>Two-Factor Authentication (2FA) Guide</h2>
            <p>Two-factor authentication adds an extra layer of security to your accounts.</p>
            <ol>
                <li>Choose a 2FA method: authenticator app, SMS, or email.</li>
                <li>Follow the instructions provided by your service provider to enable 2FA.</li>
                <li>Enter the verification code sent to your chosen method.</li>
                <li>Save your backup codes in a secure place.</li>
            </ol>
            <p>Using 2FA significantly increases your account security by requiring a second verification step in addition to your password.</p>
        </div>
    );
};

export default TwoFAGuide;
