import React, { useState } from 'react';
//import './RansomwareSimulation.css';

const RansomwareSimulation = () => {
    const [infected, setInfected] = useState(false);

    const handleInfect = () => {
        setInfected(true);
    };

    return (
        <div className={`container ${infected ? 'infected' : ''}`}>
            <h2>Ransomware Simulation</h2>
            <p>Click the button below to simulate a ransomware attack:</p>
            <button onClick={handleInfect}>Infect System</button>
            {infected && <div className="ransomware-overlay">
                <h1>Your files have been encrypted!</h1>
                <p>To get access to your files, you need to pay a ransom.</p>
            </div>}
        </div>
    );
};

export default RansomwareSimulation;
