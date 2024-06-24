import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CertificateProvider } from "./components/CertificateContext";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <CertificateProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/landingpage" element={<LandingPage />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </CertificateProvider>
    </div>
  );
}

export default App;
