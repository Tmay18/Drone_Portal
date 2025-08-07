// src/pages/HomePage.tsx
import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="split left">
                <h1>Welcome to the Drone Certification Portal</h1>
                <p>Apply for product testing, track application status, and access certification reports — all in one place.</p>
                <button className="apply-btn" onClick={() => navigate('/application')}>
                    Apply Now
                </button>
            </div>

            <div className="split right">
                <img src={`${process.env.PUBLIC_URL}/images/drone-img.jpg`} alt="Drone" className="drone-image" />
            </div>
        </div>
    );
};

export default HomePage;
