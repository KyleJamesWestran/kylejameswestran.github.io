// src/pages/Socials.jsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Socials = () => {
  return (
      <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-6 z-50">
        <a
          href="https://www.linkedin.com/in/kyle-westran-54ab78229/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-emerald-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KyleJamesWestran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-emerald-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/6311732/kyle-westran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-emerald-500 transition"
        >
          <FaStackOverflow />
        </a>
        <a
          href="https://www.youtube.com/@kyledev557"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-emerald-500 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/kylewestran/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-emerald-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/people/Kyle-Westran/pfbid0W3W5Cu17JgPFAsrZ3EpkNikPWLcYqw5AAAR7Viypv4RBF25RwqCRvWD2ZPCavBtAl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 hover:text-emerald-500 transition"
        >
          <FaFacebook />
        </a>
      </div>
  );
};

export default Socials;
