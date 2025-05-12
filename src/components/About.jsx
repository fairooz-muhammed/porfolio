import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A passionate React.js and Node.js developer over 3 years of professional
        experience. My journey in web development has been driven by curiosity
        and a love for creating intuitive, user-centric applications. I thrive
        on solving challenging problems, whether it’s designing seamless UIs
        with React or building robust backends with Node.js.
        <br />
        Beyond technical skills, I value collaboration and effective
        communication, as they’re the cornerstones of delivering impactful
        projects. I continuously seek opportunities to learn and grow, ensuring
        that my solutions align with modern development practices and industry
        standards.
        <br />
        In every project, my goal is to create applications that not only meet
        requirements but also elevate the user experience. Whether I’m crafting
        reusable components or optimizing APIs, I take pride in writing clean,
        maintainable, and scalable code.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
