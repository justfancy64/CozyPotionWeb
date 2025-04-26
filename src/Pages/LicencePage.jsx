import React from "react";
import Background from "../components/Background.jsx";
import Licence from "../components/Licence.jsx";
import Footer from "../components/Footer.jsx";

const LicencePage = () => {
  return (
    <>
      <section className="  bg-no-repeat  bg-bottom w-full h-screen bg-gradient-to-b from-green-purple-1 to-green-purple-2">
        <div className=" flex flex-row justify-center items-center bg-bannerImg bg-repeatbg-bottom h-screen w-full">
          <div className="absolute left-1/8 flex flex-col bg-green-purple-2 h-screen align-middle w-3/5 border-r-2 border-l-2 border-black "></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default LicencePage;
