import React from "react";

const OfferCard = ({ title, description, learnMore, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-md p-6 shadow-md cursor-pointer transition-all duration-200 ${
        active ? "bg-white text-green-600" : "bg-green-600 text-white"
      }`}
    >
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-sm mb-3">{description}</p>
      <a className="text-sm font-medium underline">{learnMore}</a>
      <div
        className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 ${
          active ? "bg-white shadow-md" : "bg-green-600"
        }`}
      ></div>
    </div>
  );
};

export default OfferCard;
