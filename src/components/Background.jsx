import React from "react";

import Primary from "../components/Primary";
const Background = () => {
  return (
    <>
      <section className="bg-purple-600  bg-no-repeat  bg-bottom w-full h-screen">
        <div className=" flex flex-row justify-center items-center bg-bannerImg bg-repeatbg-bottom h-screen w-full">
          <Primary />
        </div>
      </section>
    </>
  );
};
export default Background;

//   <img className=" top-0 left-0 w- max-w-full  bg-repeat" src={BGPotions} alt="" />
