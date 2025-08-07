// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-bar">
            <Link to="/" className="header-logo">
                <img src={`${process.env.PUBLIC_URL}/images/QCI-Logo.webp`} alt="QCI Logo" height="50" /></Link>
            <nav className="header-nav">
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">FAQs</a>
                <a href="#">Guide</a>
                <a href="#">Contact</a>
                <select className="lang-dropdown">
                    <option value="en">Eng</option>
                    <option value="hi">हिंदी</option>
                    <option value="ma">मराठी</option>
                </select>
            </nav>
        </header>
    );
};

export default Header;
