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
    <>
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
      <div className="relative min-h-screen bg-white/10">
        <Image
          src="/services-background.svg"
          alt="Background hero image"
          fill
          className="-z-10 select-none"
        />
        <div className="relative z-10 flex flex-col items-center text-[#00489c] py-16 px-4">
          <h2 className="text-3xl text-left font-bold ml-4 mb-4">Our Pricing Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
            <div className="w-95 h-130 bg-[#ffff]/90 text-[#00489c] rounded-2xl shadow-2xl flex flex-col p-4 border border-[#4e4b66]">
              <p className="text-3xl text-left font-bold ml-4 mt-8 mb-4">LUMP SUM</p>
              <div className="space-y-3">
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Design And Development </p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">$25/mo Hosting</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">$100 fee Per Page after 5</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">+$50/mo Unlimited Edits Add-on</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">+$250 To Add A Blog</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4 text-[#4e4b66] font-normal">24/7 Support</p>
                  <p className="w-10 pr-10">🚫</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4 text-[#4e4b66]">Lifetime Updates</p>
                  <p className="w-10 pr-10">🚫</p>
                </div>
                <div className="flex items-end mt-10">
                <h1 className="text-5xl font-semibold">$3800 </h1>
                <p className="text-lg self-end text-[#4e4b66] text-sm">+$25/mo Hosting</p>
              </div>
              <div className="pt-5">
                <button className="p-3 bg-[#00489c]/80 font-bold text-white rounded-2xl transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">Get Started</button>
              </div>
              </div>
            </div>
            <div className="w-95 h-140 bg-[#336db0]/90 text-white rounded-2xl shadow-2xl flex flex-col p-4">
              <h1 className="text-3xl text-left font-bold ml-4 mt-8 mb-4">MONTHLY</h1>
              <div className="space-y-3">
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Design And Development </p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Includes Hosting</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">$100 fee Per Page after 5</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">+$50/mo Unlimited Edits Add-on</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">+$250 To Add A Blog</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Unlimited Edits</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">24/7 Support</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Lifetime Updates</p>
                  <p className="w-10 pr-10">✔</p>
                </div>
              </div>
              <div className="flex items-end mt-10">
                <h1 className="text-5xl font-semibold">$175 </h1>
                <p className="text-lg self-end text-sm ml-1">per month</p>
              </div>
              <div className="pt-5">
                <button className="p-3 bg-white text-[#00489c] font-bold rounded-2xl transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">Get Started</button>
              </div>
            </div>
            <div className="w-95 h-130 bg-white text-[#00489c] rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-6">
              <p className="text-xl font-semibold">PLACEHOLDER</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
