import React, { useState, useRef, useContext } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import template1 from "../images/certi1.jpg";
import template2 from "../images/certi2.jpg";
import template3 from "../images/certi3.jpg";
import template4 from "../images/certi4.jpg";
import template5 from "../images/certi5.jpg";
import template6 from "../images/certi6.jpg";
import template7 from "../images/certi7.jpg";
import { CertificateContext } from "./CertificateContext";

import "../Style/Home1.css";
import Header from "./Header";
import Dashboard from "./Dashboard";

const templates = [
  {
    id: 1,
    src: template1,
    alt: "Template 1",
    className: "template1",
  },
  {
    id: 2,
    src: template2,
    alt: "Template 2",
    className: "template2",
  },
  {
    id: 3,
    src: template3,
    alt: "Template 3",
    className: "template3",
  },
  {
    id: 4,
    src: template4,
    alt: "Template 4",
    className: "template4",
  },

  {
    id: 5,
    src: template5,
    alt: "Template 5",
    className: "template5",
  },
  {
    id: 6,
    src: template6,
    alt: "Template 6",
    className: "template6",
  },
  {
    id: 7,
    src: template7,
    alt: "Template 7",
    className: "template7",
  },
];

const Home1 = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [recipient, setRecipient] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [signature, setSignature] = useState("");
  const { addCertificate } = useContext(CertificateContext);
  const certificateRef = useRef(null);

  const generatePDF = () => {
    const input = certificateRef.current;
    html2canvas(input, { scale: 5, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [700, 500],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 700, 500);
      pdf.save("certificate.pdf");
      addCertificate(recipient);
    });
  };

  // const certificateRef = useRef(null);

  const downloadImage = () => {
    const input = certificateRef.current;
    html2canvas(input, { scale: 5, useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png", 1.0);
      link.download = "certificate.png";
      link.click();
      addCertificate(recipient);
    });
  };

  return (
    <>
      <div className="certi-app">
        <Header />
        <section className="section ">
          <div className="elementor-container elementor-column-gap-extended">
            <div className="elementor-widget-container">
              <h1>Free Online Certificate Maker</h1>
            </div>
          </div>
        </section>
        <div className="app-content">
          <h2>Step 1. Select a certificate template</h2>
          <div className="step-desc">
            Our online tool offers a wide range of templates to use as a base
            for designing your certificate. You can edit the details and print
            it out to certify success for achievement or event. Choose from a
            wide range of templates that suit your purpose.
          </div>
          <div className="templateses">
            {templates.map((template) => (
              <img
                key={template.id}
                src={template.src}
                alt={template.alt}
                className={
                  selectedTemplate.id === template.id ? "selected" : ""
                }
                onClick={() => setSelectedTemplate(template)}
              />
            ))}
          </div>
          <h2 className="info">Step 2. Enter personalized information</h2>
          <form className="form-content">
            <div className="mb-3">
              <label htmlFor="recipientInput" className="form-label">
                Recipient
              </label>
              <input
                type="text"
                className="form-control"
                id="recipientInput"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateInput" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="dateInput"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3 description">
              <label htmlFor="descriptionInput" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="descriptionInput"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="trainerInput" className="form-label">
                Signature
              </label>
              <input
                type="text"
                className="form-control"
                id="trainerInput"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
              />
            </div>
          </form>
          <div className="certificate-preview">
            <h1>Certificate Preview</h1>
            <div
              className={`certificates ${selectedTemplate.className}`}
              style={{ backgroundImage: `url(${selectedTemplate.src})` }}
              ref={certificateRef}
            >
              <h3>{recipient}</h3>
              <p>{description}</p>
              <h6>{date}</h6>
              <h5>{signature}</h5>
            </div>
          </div>
          <div className="button-container">
            <button className="submit" onClick={generatePDF}>
              Generate PDF
            </button>
            <button className="submit1" onClick={downloadImage}>
              Generate Image
            </button>
          </div>
        </div>
      </div>
      <Dashboard/>
    </>
  );
};

export default Home1;
