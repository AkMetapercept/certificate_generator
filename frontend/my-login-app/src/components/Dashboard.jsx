import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CertificateContext } from "./CertificateContext";
import "../Style/Dashboard.css";
import Header from "./Header";
import Footer from "./Footer";


const Dashboard = () => {
  const { certificates, totalCertificates,
    //  removeCertificate
     } =
    useContext(CertificateContext);

    // const handleDelete = (id) => {
    //     removeCertificate(id);
    //   };

  return (
    <div className="dashboard">
    <Header/>
      <div class="container">
    <div class="header">
      <div className="text1">Certificate Generated List</div>
      <div className="text2">
        Certificates Generated Up To Date: {totalCertificates}
      </div>
    </div>
    <div class="link-container">
      <Link to="/landingpage" className="submit11">
        Want To Generate Certificate
      </Link>
    </div>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <th scope="row">{certificate.id}</th>
              <td>{certificate.name}</td>
              {/* <th scope="row">
                {certificates.map((certificate) => (
                  <li key={certificate.id}>
                    {" "}
                    <button className="submit3" onClick={() => handleDelete(certificate.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </th> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
        
  <div style={{position:"relative", top:"333px"}}><Footer/></div>
    </div>
  );
};

export default Dashboard;
