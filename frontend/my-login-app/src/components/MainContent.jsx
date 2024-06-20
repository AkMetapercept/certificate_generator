import React from 'react';
import '../Style/Content.css';
import img from "../images/certificate.jpg";

const MainContent = () => {
    return (
        <main className="main-content">
            <h1>Free Certificate Maker</h1>
            <p>Generate eye-catching certificates for your students or colleagues and download to print in PDF format</p>
            {/* <button className="generate-button">Generate Certificate For Free</button> */}
            <div className="certificate-preview">
                <img src={img} alt="Certificate Preview" />
            </div>
        </main>
    );
};

export default MainContent;
