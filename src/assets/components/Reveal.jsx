import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * Wraps children in a fade/slide-up animation that triggers once,
 * the first time the element scrolls into view.
 */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export default Reveal;
