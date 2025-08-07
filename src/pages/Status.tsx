// src/pages/Status.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileAlt,
    faSearch,
    faCheckCircle,
    faCalendarCheck,
    faBoxOpen,
    faGears,
    faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

import '../styles/Status.css';

const steps = [
    {
        label: 'Application Submitted',
        icon: faFileAlt // A document icon for submission
    },
    {
        label: 'Under Scrutiny',
        icon: faSearch // Reviewing or investigating the application
    },
    {
        label: 'Approved for Testing',
        icon: faCheckCircle // Indicates formal approval
    },
    {
        label: 'Sample Collection Scheduled',
        icon: faCalendarCheck // Scheduled collection
    },
    {
        label: 'Sample Collected',
        icon: faBoxOpen // Represents physical receipt
    },
    {
        label: 'Testing in Progress',
        icon: faGears // Lab-style testing in progress
    },
    {
        label: 'Conformity Assessment',
        icon: faClipboardCheck // Represents a compliance review
    }
];


// Simulated current step (0-based index)
const currentStep = 1; // Change this to simulate different steps
const Status = () => {
    return (
        <div className="status-container">
            <h2 className="status-title">Application Status</h2>

            <div className="status-stepper">
                <div className="status-line" />
                <div className="status-steps">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`status-step ${index < currentStep ? 'completed' :
                                index === currentStep ? 'active' : ''
                                }`}
                        >
                            <div className="status-step-circle">
                                {index < currentStep ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className="completed-icon" />
                                ) : (
                                    <FontAwesomeIcon icon={step.icon} />
                                )}
                            </div>
                            <div className="status-step-label">{step.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="status-final-note">
                Final certificate will be available after approval.
            </div>

            <button
                className={`status-download-btn ${currentStep === steps.length - 1 ? 'enabled' : ''}`}
                disabled={currentStep !== steps.length - 1}
            >
                Download Certificate
            </button>
        </div>
    );
};

export default Status;
