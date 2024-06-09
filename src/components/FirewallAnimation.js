import React from 'react';
//import './FirewallAnimation.css';

const FirewallAnimation = () => {
    return (
        <div className="container">
            <h2>Firewall Animation</h2>
            <div className="firewall">
                <div className="network">
                    <div className="attack"></div>
                    <div className="attack"></div>
                    <div className="attack"></div>
                </div>
                <div className="firewall-image">🔥</div>
                <div className="system">
                    <div className="safe"></div>
                </div>
            </div>
            <p>The firewall is protecting your system from attacks.</p>
        </div>
    );
};

export default FirewallAnimation;
