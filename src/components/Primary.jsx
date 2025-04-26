import React from "react";
import Logo from "../assets/cozylogored.png";
import Navigations2 from "../components/Navigations2";
import GameList from "./GameList.jsx";
import Contact from "./Contact.jsx";
import Footer from "../components/Footer.jsx";

const Primary = () => {
  return (
    <div className="absolute left-1/8 flex flex-col bg-green-purple-2 h-screen align-middle w-3/5 border-r-2 border-l-2 border-black ">
      <a href="/" className="flex justify-center  w-full h-fit rounded-xl">
        <img
          className=" w-1/2 h-auto object-cover bg-green-purple-2"
          src={Logo}
          alt="Background"
        />
      </a>
      <div className="flex justify-center bg-green-purple-2  w-full h-2/8  mb-3   ">
        <Navigations2 />
      </div>
      <div className=" bg-purple-400flex justify-center items-center w-full h-1/6 flex-col rounded-2xl mb-3 mr-2">
        <h2 className="truncate h-1/2 w-full flex flex-row justify-center items-center bg-green-purple-1 text-white font-[arial] md:text-3xl border-t-2 border-green-purple-1">
          {" "}
          We're a small indie team developing cozy games for PC and mobile{" "}
        </h2>
        <p className=" truncate h-1/2 w-full flex flex-row justify-center items-center bg-green-purple-1 text-white font-[arial] text-2xl border-b-2 border-green-purple-1">
          Get in touch at contact@cozypotion.com
        </p>
      </div>
      <div className=" flex justify-center  w-full h-fit  mb-3">
        <GameList />
      </div>
      <Contact />

      <Footer />
    </div>
  );
};
export default Primary;
