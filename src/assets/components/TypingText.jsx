import React, { useState, useEffect } from "react";

const TypingText = () => {
  const words = ["NEAT", "SCALABLE", "USER FRIENDLY", "CREATIVE", "IMPACTFUL", "INNOVATIVE"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, pause]);

  useEffect(() => {
    const currentWord = words[index];

    if (!deleting && subIndex === currentWord.length) {
      setPause(true);
      setTimeout(() => {
        setDeleting(true);
        setPause(false);
      }, 1000); // Pause when word is fully typed
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
  }, [subIndex, deleting, index, words]);

  return (
    <p className="text-2xl main-font font-bold mt-2">
      Software that is{" "}
      <span className="text-emerald-500 typewriter-font">
        {words[index].substring(0, subIndex)}
        <span className="border-r-2 border-white ml-1 inline-block w-2 h-5 align-text-bottom animate-pulse" />
      </span>
    </p>
  );
};

export default TypingText;
