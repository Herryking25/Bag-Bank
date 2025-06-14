import React from "react";
import CountUp from "react-countup";
import aboutImage from "../assets/image/aboutImage.png";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h5 className="text-sm text-gray-500 mb-2">About us</h5>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4 leading-snug">
            We of the best and idea <br className="hidden sm:block" />
            trading signals for all
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Trading is the business of risk, Bag bank leverages cutting-edge technology
            and market expertise to deliver innovative solutions for students. Our team
            of analysts and traders are always working to stay ahead of market trends,
            ensuring that students receive the best trading experience.
          </p>

          {/* Stats Box */}
          <div className="flex flex-col sm:flex-row gap-6 max-w-md">
            <div className="bg-white shadow-md p-6 text-center rounded-md flex-1">
              <h3 className="text-green-600 text-2xl font-bold">
                <CountUp end={100} duration={5} suffix="+" />
              </h3>
              <p className="text-gray-500 text-sm">Happy Students</p>
            </div>
            <div className="bg-white shadow-md p-6 text-center rounded-md flex-1">
              <h3 className="text-green-600 text-2xl font-bold">
                <CountUp end={10} duration={5} />
              </h3>
              <p className="text-gray-500 text-sm">Team Members</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About us"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
