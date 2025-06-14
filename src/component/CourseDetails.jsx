import React from "react";
import BitImage from "../assets/image/bitTeach.png";
import EliteImage from "../assets/image/EliteImage.png";

const CourseDetails = ({ selected }) => {
    const details = {
      "Bit Teach": {
        title: "Bit Teach",
        description: `An entrepreneur is someone who starts or owns a business. Whether it’s in
          farming, retail, manufacturing or in the service sector, entrepreneurs are
          businesspeople who find their success by taking risks. In their pursuits,
          they often become disruptors in established industries.`,
        image: BitImage,
      },
      Elite: {
        title: "Elite",
        description: `Elite students receive premium mentorship with Bag Daddy including access
          to trading tools, advanced strategies, and one-on-one sessions designed to
          accelerate your trading journey and reach financial independence faster.`,
        image: EliteImage,
      },
    };
  
    const course = details[selected];
  
    return (
    <div className="flex justify-center items-center">

        <div className=" w-[900px] bg-[#131416] shadow-md rounded-md p-6 mt-12 flex flex-col md:flex-row gap-12 justify-center items-center">
            <img
            src={course.image}
            alt="Course"
            className="w-48 h-48 object-contain"
            />
            <div className="text-center px-4 w-[300px] md:text-left">
            <h4 className="text-green-600 font-bold text-xl mb-2">{course.title}</h4>
            <p className="w-[300px] md:w-[400px] text-sm text-whitesmoke  mb-4">{course.description}</p>
            <button className="bg-green-600 hover:bg-green-700 text-whitesmoke text-sm px-4 py-2 rounded-full">
                Get course
            </button>
            </div>
        </div>
    </div>
    );
  };
  
  export default CourseDetails;
  