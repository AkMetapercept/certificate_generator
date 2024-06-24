import React, { createContext, useState, useEffect } from "react";

export const CertificateContext = createContext();

export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    fetchRecipients();
  }, []);

  const fetchRecipients = async () => {
    try {
      const response = await fetch("http://localhost:3001/getCertificateData");
      const user = await response.json();
      setCertificates(user);
    } catch (error) {
      console.error("Error fetching recipients:", error);
    }
  };

  const addCertificate = async (name) => {
    try {
      const response = await fetch("http://localhost:3001/addCertificateData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        await fetchRecipients();
      }
    } catch (error) {
      console.error("Error adding recipient:", error);
    }
  };

  return (
    <CertificateContext.Provider
      value={{
        certificates,
        addCertificate,
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};
