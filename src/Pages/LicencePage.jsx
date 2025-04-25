import React from "react";
import Background from "../components/Background.jsx";
import Licence from "../components/Licence.jsx";
import Footer from "../components/Footer.jsx";
const LicencePage = () => {
  return (
    <div className=" h-96 relative max-w-full max-h-full items-center ">
      <Background />
      <Licence />
      <Footer />
    </div>
  );
};
export default LicencePage;
