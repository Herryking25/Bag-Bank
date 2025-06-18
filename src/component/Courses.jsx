import React, { useState } from "react";
import { motion } from "framer-motion";
import OfferCard from "./OfferCard";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState("Bit Teach");

  return (
    <section
      id="courses"
      className="bg-[#131416] text-white py-20 px-4 text-center"
    >
      <motion.h5
        className="text-sm text-gray-500 uppercase"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Courses
      </motion.h5>

      <motion.h2
        className="text-4xl font-bold text-green-600 mt-2 mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        What We Offer
      </motion.h2>

      <motion.p
        className="text-sm text-gray-500 max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        At Bag Bank, we teach students about crypto trading and crypto emails.
        We offer one-on-one mentorship and help them feel comfortable and safe
        to take risks and invest their money into crypto.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <OfferCard
          title="BIT TEACH"
          description="One on one mentorship with Bag Daddy"
          learnMore="Learn more..."
          active={selectedCourse === "Bit Teach"}
          onClick={() => setSelectedCourse("Bit Teach")}
        />
        <OfferCard
          title="ELITE"
          description="Premium calls from Bag Daddy"
          learnMore="Learn more..."
          active={selectedCourse === "Elite"}
          onClick={() => setSelectedCourse("Elite")}
        />
      </motion.div>

      <motion.div
        key={selectedCourse}
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <CourseDetails selected={selectedCourse} />
      </motion.div>
    </section>
  );
};

export default Courses;
