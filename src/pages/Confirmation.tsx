import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Confirmation.css';

const ConfirmationPage = () => {
    const navigate = useNavigate();

    const handleStatusClick = () => {
        navigate('/status');
    };

    // Get current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    return (
        <div className="confirmation-wrapper">
            <div className="confirmation-card">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h2>Application Submitted Successfully</h2>
                <p className="confirmation-message">Thank you for submitting your product for testing.</p>

                <div className="confirmation-details">
                    <p><span>Application ID:</span> <strong>XXXXXXX</strong></p>
                    <p><span>Product Name:</span> <strong>ABC Drone</strong></p>
                    <p><span>Submitted On:</span> <strong>{formattedDateTime}</strong></p>
                </div>

                <button className="status-btn" onClick={handleStatusClick}>
                    View Application Status
                </button>
            </div>
        </div>
    );
};

export default ConfirmationPage;
