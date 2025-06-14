import React, { useState } from "react";
import OfferCard from "./OfferCard";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState("Bit Teach");

  return (
    <section id="courses" className=" bg-[#131416] text-white py-20 px-4 text-center">
      <h5 className="text-sm text-gray-500 uppercase">Courses</h5>
      <h2 className="text-4xl font-bold text-green-600 mt-2 mb-2">What We Offer</h2>
      <p className="text-sm text-gray-500 max-w-xl mx-auto mb-12">
        At Bag Bank, we teach students about crypto trading and crypto emails.
        We offer one-on-one mentorship and help them feel comfortable and safe
        to take risks and invest their money into crypto.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
      </div>

      <CourseDetails selected={selectedCourse} />
    </section>
  );
};

export default Courses;
