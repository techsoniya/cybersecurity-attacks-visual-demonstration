import React, { useState } from 'react';
// import './DataBreachAlert.css';

const DataBreachAlert = () => {
    const [breached, setBreached] = useState(false);

    const handleBreach = () => {
        setBreached(true);
    };

    return (
        <div className="container">
            <h2>Data Breach Alert</h2>
            <button onClick={handleBreach}>Simulate Data Breach</button>
            {breached && <div className="data-breach-alert">
                <h1>Data Breach Detected!</h1>
                <p>Personal information has been compromised.</p>
            </div>}
        </div>
    );
};

export default DataBreachAlert;
