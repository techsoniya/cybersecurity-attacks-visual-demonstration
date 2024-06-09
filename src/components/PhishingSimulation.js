import React, { useState } from 'react';

const PhishingSimulation = () => {
    const [clicked, setClicked] = useState(false);

    const handlePhishingClick = () => {
        setClicked(true);
    };

    return (
        <div className={`container ${clicked ? 'hacked' : ''}`}>
            <h2>Phishing Simulation</h2>
            <p>Click on the link below to see what happens:</p>
            <button onClick={handlePhishingClick}>Click me</button>
            {clicked && <p className="alert">You have clicked on a phishing link! Be careful next time.</p>}
            {clicked && <div className="hacked-overlay">
                <h1>System Hacked!</h1>
                <p>Your system is now compromised. This is a simulation of what might happen if you click on a phishing link.</p>
            </div>}
        </div>
    );
};

export default PhishingSimulation;
