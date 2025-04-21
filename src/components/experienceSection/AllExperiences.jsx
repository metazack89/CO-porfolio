import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Desarrollo Software y Hardware ltda ",
    date: "2024 - Present",
    responsibilities: [
      "🚀 User Interface Designs",
      "⚡ Site Optimization & Performance",
      "💻 Frontend & Occasionally Backend ",
      "💡 Generating Innovative Ideas ",
    ],
  },
  {
    job: "Develop APIs",
    company: "independent",
    date: "2024 - Present",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;
