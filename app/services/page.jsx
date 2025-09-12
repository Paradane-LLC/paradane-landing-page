"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";

import uiux from "@/public/UIUX.json";
import social from "@/public/Social-Media.json";
import web from "@/public/Web-Dev.json";
import seo from "@/public/SEO.json";

const items = [
  { title: "UI/UX Design", data: uiux, speed: 1 },
  { title: "Social Media Marketing", data: social, speed: 0.6 },
  { title: "Web Development", data: web, speed: 1 },
  { title: "SEO", data: seo, speed: 1000 },
];

export default function Services() {
  const socialRef = useRef();
  const seoRef = useRef();

  useEffect(() => {
    // Setting custom frame segments after animation loads due to animation blinking/stuttering
    const timer = setTimeout(() => {
      if (socialRef.current) {
        socialRef.current.playSegments([0, 87], true);
      }
      if (seoRef.current) {
        seoRef.current.playSegments([0, 60], true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getLottieRef = (title) => {
    if (title === "Social Media Marketing") return socialRef;
    if (title === "SEO") return seoRef;
    return null;
  };

  return (
    <div className="relative min-h-screen bg-[#00489c]/80">
      <Image
        src="/services-background.svg"
        alt="Background hero image"
        fill
        className="-z-10 select-none"
      />

      <div className="relative z-10 flex flex-col items-center text-white py-16 px-4">
        <h1 className="text-4xl font-bold mt-20 mb-6">Our Services</h1>
        <p className="text-lg mt-4 max-w-2xl text-center mb-12">
          We offer a wide range of services to help your business thrive in the
          digital age…
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ title, data, speed }) => (
            <div
              key={title}
              className="bg-white/60 text-[#00489c] backdrop-blur rounded-2xl shadow-lg flex flex-col items-center text-center p-6 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer "
            >
              <Lottie
                lottieRef={getLottieRef(title)}
                animationData={data}
                loop
                autoplay
                style={{ width: 200, height: 200 }}
                speed={speed}
              />
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
