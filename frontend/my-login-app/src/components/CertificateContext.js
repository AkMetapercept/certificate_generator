import React, { createContext, useState, useEffect } from 'react';

export const CertificateContext = createContext();

export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState(() => {
    const savedCertificates = localStorage.getItem('certificates');
    return savedCertificates ? JSON.parse(savedCertificates) : [];
  });

  useEffect(() => {
    localStorage.setItem('certificates', JSON.stringify(certificates));
  }, [certificates]);

  const addCertificate = (name) => {
    setCertificates([...certificates, { id: certificates.length + 1, name }]);
  };

  const removeCertificate = (id) => {
    const updatedCertificates = certificates.filter((certificate) => certificate.id !== id);
    setCertificates(updatedCertificates);
  };


  return (
    <CertificateContext.Provider
      value={{
        certificates,
        addCertificate,
        removeCertificate,
        totalCertificates: certificates.length, // Total count of certificates
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};
