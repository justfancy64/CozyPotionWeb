import React from "react";
import licenceText from "../assets/LicenceTemp.json";

const Licence = () => {
  return (
    <div className="text-wrap break-words left-1/4  h-full m-5 w-1/2 bg-purple-900 text-white z-10 absolute sm:pt-7 sm:pr-4 sm:pl-4">
      <p>{licenceText.licence}</p>
    </div>
  );
};
export default Licence;
