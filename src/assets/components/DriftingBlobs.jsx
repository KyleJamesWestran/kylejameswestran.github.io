import React from "react";

// Slowly drifting, blurred blobs matching the section's background color.
// They sit above the dot pattern and below content, creating the illusion
// of dots fading in/out as invisible "erasers" glide over them.
const BLOBS = [
  { size: 260, top: "8%", left: "12%", duration: 30, delay: "0s", drift: "drift-1" },
  { size: 320, top: "45%", left: "68%", duration: 38, delay: "-8s", drift: "drift-2" },
  { size: 220, top: "72%", left: "28%", duration: 26, delay: "-14s", drift: "drift-3" },
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
