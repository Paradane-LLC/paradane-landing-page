"use client";

export default function GlowingText({ text, tcolor, tsize, time, tshadow }) {
  return (
    <span
      className={`text-${tsize} font-semibold text-${tcolor} relative animate-[pulse_${time}_ease-in-out_infinite]`}
      style={{
        textShadow: `
          0 0 5px ${tshadow},
          0 0 10px ${tshadow},
          0 0 20px ${tshadow},
          0 0 40px ${tshadow}
        `,
      }}
    >
      {text}
    </span>
  );
}