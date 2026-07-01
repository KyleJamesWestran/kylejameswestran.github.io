import React from "react";
import Reveal from "../assets/components/Reveal";

const About = () => {
  return (
    <section id="about" className="w-full px-6 md:px-20 py-24 md:py-32 flex flex-col md:flex-row items-center gap-14 md:gap-20 bg-white text-primary">
      <Reveal className="w-full md:w-2/5 flex justify-center">
        <img src="/images/Kyle.jpeg" alt="Kyle Westran"
          className="rounded-3xl w-56 h-auto md:w-full max-w-sm object-cover shadow-xl" />
      </Reveal>
      <Reveal delay={120} className="w-full md:w-3/5">
        <p className="main-font text-emerald-500 font-semibold tracking-widest uppercase text-sm mb-3">
          About me
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 main-font">Who I am</h2>
        <p className="text-base md:text-xl mb-5 main-font text-gray-700 leading-relaxed">
          Hi, I'm Kyle, a family-oriented, adventurous, and curious individual who thrives on{" "}
          <span className="fancy-font text-emerald-500">creativity</span> and meaningful connections. I value balancing
          professional growth with personal relationships, always striving to make a{" "}
          <span className="fancy-font text-emerald-500">positive impact</span> on the people and projects I care about.
        </p>
        <p className="text-base md:text-xl mb-5 main-font text-gray-700 leading-relaxed">
          I'm a <span className="fancy-font text-emerald-500">passionate</span> developer specialising in creating efficient,
          user-friendly applications. Skilled in many different languages and frameworks, I enjoy solving
          real-world problems with <span className="fancy-font text-emerald-500">innovative</span> solutions.
        </p>
        <p className="text-base md:text-xl mb-5 main-font text-gray-700 leading-relaxed">
          I bring reliability, adaptability, and a strong work ethic to every role. My commitment to lifelong learning
          drives me to continuously improve and stay <span className="fancy-font text-emerald-500">adaptable</span> to new challenges.
        </p>
        <p className="text-base md:text-xl main-font text-gray-700 leading-relaxed">
          So if you see the potential for collaboration, feel free to{" "}
          <span className="fancy-font text-emerald-500">reach out</span>.
        </p>
      </Reveal>
    </section>
  );
};

export default About;
