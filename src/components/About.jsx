import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10 bg-white text-primary">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/images/Kyle.jpeg" alt="Kyle Westran"
          className="rounded-3xl w-56 h-auto md:w-96 object-cover" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 main-font">ABOUT</h2>
        <p className="text-base md:text-xl mb-5 main-font">
          Hi, I'm Kyle, a family-oriented, adventurous, and curious individual who thrives on{" "}
          <span className="fancy-font text-emerald-500">creativity</span> and meaningful connections. I value balancing
          professional growth with personal relationships, always striving to make a{" "}
          <span className="fancy-font text-emerald-500">positive impact</span> on the people and projects I care about.
        </p>
        <p className="text-base md:text-xl mb-5 main-font">
          I'm a <span className="fancy-font text-emerald-500">passionate</span> developer specialising in creating efficient,
          user-friendly applications. Skilled in many different languages and frameworks, I enjoy solving
          real-world problems with <span className="fancy-font text-emerald-500">innovative</span> solutions.
        </p>
        <p className="text-base md:text-xl mb-5 main-font">
          I bring reliability, adaptability, and a strong work ethic to every role. My commitment to lifelong learning
          drives me to continuously improve and stay <span className="fancy-font text-emerald-500">adaptable</span> to new challenges.
        </p>
        <p className="text-base md:text-xl main-font">
          So if you see the potential for collaboration, feel free to{" "}
          <span className="fancy-font text-emerald-500">reach out</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
