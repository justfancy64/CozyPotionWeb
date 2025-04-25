import React from "react";
import Logo from "../assets/cozylogored.png";
import Navigations2 from "../components/Navigations2";
import GameList from "./GameList.jsx";
import Contact from "./Contact.jsx";

const Primary = () => {
  return (
    <div className="absolute left-1/8 flex flex-col bg-purple-900 h-screen align-middle w-3/5 border-r border-l border-purple-400 ">
      <a href="/" className="flex justify-center  w-full h-72 rounded-xl">
        <img
          className=" w-5/12 h-auto object-cover bg-purple-900"
          src={Logo}
          alt="Background"
        />
      </a>
      <div className="flex justify-center bg-purple-400  w-full h-14 rounded-2xl mb-3 ">
        <Navigations2 />
      </div>
      <div className=" bg-purple-400flex justify-center items-center w-full h-28 bg-white flex-col rounded-2xl mb-3 ">
        <h2 className="h-1/2 w-full flex flex-row justify-center items-center bg-purple-400 text-white font-bold text-3xl rounded-t-2xl">
          {" "}
          grrrrrrrrrrrrrrr{" "}
        </h2>
        <p className="h-1/2 w-full flex flex-row justify-center items-center bg-purple-400 text-white text-2xl rounded-b-2xl">
          meomeowmeomeomeomeomeomeomeomeomeomeomeomeo
        </p>
      </div>
      <div className=" flex justify-center  w-full h-60 rounded-2xl mb-3">
        <GameList />
      </div>
      <Contact />
    </div>
  );
};
export default Primary;
