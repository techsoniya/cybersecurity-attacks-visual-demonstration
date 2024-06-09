import React from 'react';
//import './NetworkAttackVisualization.css';

const NetworkAttackVisualization = () => {
    return (
        <div className="container">
            <h2>Network Attack Visualization</h2>
            <div className="network-diagram">
                <div className="node attacker">Attacker</div>
                <div className="node victim">Victim</div>
                <div className="attack-line"></div>
            </div>
            <p>This visual represents an attacker targeting a victim's computer on the network.</p>
        </div>
    );
};

export default NetworkAttackVisualization;
