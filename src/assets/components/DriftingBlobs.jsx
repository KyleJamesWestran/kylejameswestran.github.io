import React from "react";

// Slowly drifting, blurred blobs matching the section's background color.
// They sit above the dot pattern and below content, creating the illusion
// of dots fading in/out as invisible "erasers" glide over them.
const BLOBS = [
  { size: 520, top: "4%", left: "8%", duration: 33, delay: "-3s", drift: "drift-1" },
  { size: 560, top: "10%", left: "80%", duration: 41, delay: "-19s", drift: "drift-2" },
  { size: 460, top: "58%", left: "22%", duration: 27, delay: "-9s", drift: "drift-3" },
  { size: 500, top: "78%", left: "72%", duration: 36, delay: "-24s", drift: "drift-2" },
];

const DriftingBlobs = ({ color = "#fff" }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -5 }} aria-hidden="true">
    {BLOBS.map((b, i) => (
      <div
        key={i}
        className={`dot-mask-blob ${b.drift}`}
        style={{
          width: b.size,
          height: b.size,
          top: b.top,
          left: b.left,
          background: `radial-gradient(circle, ${color} 0%, ${color} 35%, transparent 70%)`,
          animationDuration: `${b.duration}s`,
          animationDelay: b.delay,
        }}
      />
    ))}
  </div>
);

export default DriftingBlobs;
