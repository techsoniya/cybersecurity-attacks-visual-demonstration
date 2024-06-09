import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PhishingSimulation from './components/PhishingSimulation';
import PasswordChecker from './components/PasswordChecker';
import SecureBrowsingTips from './components/SecureBrowsingTips';
import EmailSpoofingDetector from './components/EmailSpoofingDetector';
import TwoFAGuide from './components/TwoFAGuide';
import RansomwareSimulation from './components/RansomwareSimulation';
import FirewallAnimation from './components/FirewallAnimation';
import NetworkAttackVisualization from './components/NetworkAttackVisualization';
import DataBreachAlert from './components/DataBreachAlert';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/phishing" element={<PhishingSimulation />} />
                    <Route path="/password-checker" element={<PasswordChecker />} />
                    <Route path="/secure-browsing-tips" element={<SecureBrowsingTips />} />
                    <Route path="/email-spoofing-detector" element={<EmailSpoofingDetector />} />
                    <Route path="/twofa-guide" element={<TwoFAGuide />} />
                    <Route path="/ransomware" element={<RansomwareSimulation />} />
                    <Route path="/firewall" element={<FirewallAnimation />} />
                    <Route path="/network-attack" element={<NetworkAttackVisualization />} />
                    <Route path="/data-breach" element={<DataBreachAlert />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
