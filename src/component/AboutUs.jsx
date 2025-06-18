import React from "react";
import CountUp from "react-countup";
import aboutImage from "../assets/image/aboutImage.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once:false, amount: 0.2 }} // <-- scroll-triggered
        >
          <h5 className="text-sm text-gray-500 mb-2">About us</h5>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4 leading-snug">
            We offer the best and ideal <br className="hidden sm:block" />
            trading signals for all
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Trading is the business of risk. Bag Bank leverages cutting-edge technology
            and market expertise to deliver innovative solutions for students. Our team
            of analysts and traders work to stay ahead of market trends, ensuring you
            get the best trading experience.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 max-w-md">
            {[{ value: 100, label: "Happy Students", suffix: "+" }, { value: 10, label: "Team Members" }].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white shadow-md p-6 text-center rounded-md flex-1"
              >
                <h3 className="text-green-600 text-2xl font-bold">
                  <CountUp end={stat.value} duration={4} suffix={stat.suffix || ""} />
                </h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={aboutImage}
            alt="About us"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
