import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { GoogleOAuthProvider } from "@react-oauth/google";

// components imports
import Home from "./pages/Home/Home.jsx";
import LoginPage from "./pages/LoginSignup/LoginPage.jsx";
import Signup from "./pages/LoginSignup/SignupPage.jsx";
import VideoPreview from "./pages/VideoPreview/VideoPreview.jsx";
import Contact from './pages/Contact/Contact.jsx'
function App() {
  const clientId =
    "715277608713-sgtqudvfba9sr26avhok47041iskncu4.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/videopreview" element={<VideoPreview />} />
            <Route exaxt path="/contact" element={ <Contact />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
