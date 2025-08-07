// src/pages/Application.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Application.css';

const steps = [
    {
        title: 'Step I – Applicant Details',
        content:
            'Company Name, CIN/PAN/GSTIN, Registered Address, Type of Entity (Startup, MSME, Pvt Ltd. etc.), Name and Designation of Authorised Person, Email, Mobile No., Website(Company)',
    },
    { title: 'Step II – Product Information', content: 'Provide technical and usage details about your drone.' },
    { title: 'Step III – Documentation Required', content: 'Upload incorporation, authorization, and regulatory documents.' },
    { title: 'Step IV – Technical Specifications', content: 'Enter drone specs: weight, range, flight time, payload, etc.' },
    { title: 'Step V – Document Upload', content: 'Upload all filled forms, test protocols, and manufacturer datasheets.' },
    { title: 'Step VI – Declarations and Consent', content: 'Agree to testing policies, submit declarations.' },
    { title: 'Step VII – Review and Submission', content: 'Review all inputs, confirm, and submit your application.' },
];

const Application = () => {
    const [selectedStep, setSelectedStep] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/confirmation');
    };

    return (
        <>
            <div className="application-page-header">Drone Testing Application</div>

            <div className="application-wrapper">
                <div className="application-wizard-container">
                    {/* Left Panel */}
                    <aside className="step-nav">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`step-nav-item ${selectedStep === index ? 'active' : ''}`}
                                onClick={() => setSelectedStep(index)}
                            >
                                {step.title}
                            </div>
                        ))}
                    </aside>

                    {/* Right Panel */}
                    <section className="step-content-panel">
                        <h2>{steps[selectedStep].title}</h2>
                        <p>{steps[selectedStep].content}</p>

                        {selectedStep === steps.length - 1 && (
                            <div className="submit-btn-wrapper">
                                <button className="submit-btn" onClick={handleSubmit}>
                                    Submit Application
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
};

export default Application;
