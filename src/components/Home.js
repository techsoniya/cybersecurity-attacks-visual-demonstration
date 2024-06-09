import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Awareness Tool</h1>
            <p>Learn about cybersecurity threats and how to protect yourself online.</p>
            <nav>
                <ul>
                    <li><Link to="/phishing">Phishing Simulation</Link></li>
                    <li><Link to="/password-checker">Password Strength Checker</Link></li>
                    <li><Link to="/secure-browsing-tips">Secure Browsing Tips</Link></li>
                    <li><Link to="/email-spoofing-detector">Email Spoofing Detector</Link></li>
                    <li><Link to="/twofa-guide">Two-Factor Authentication (2FA) Guide</Link></li>
                    <li><Link to="/ransomware">Ransomware Simulation</Link></li>
                    <li><Link to="/firewall">Firewall Animation</Link></li>
                    <li><Link to="/network-attack">Network Attack Visualization</Link></li>
                    <li><Link to="/data-breach">Data Breach Alert</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
