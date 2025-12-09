"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
import { Monitor, Share2, Palette, Search } from "lucide-react";

import uiux from "@/public/UIUX.json";
import social from "@/public/Social-Media.json";
import web from "@/public/Web-Dev.json";
import seo from "@/public/SEO.json";

import GlowingText from "@/public/Textglow";

import heroanimation from "@/public/hero-section.json";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const items = [
  { title: "UI/UX Design", data: uiux, speed: 1 },
  { title: "Social Media Marketing", data: social, speed: 0.6 },
  { title: "Web Development", data: web, speed: 1 },
  { title: "SEO", data: seo, speed: 1 },
];

export default function Services() {
  const socialRef = useRef();
  const seoRef = useRef();
  const uiuxLottieRef = useRef();
  const uiuxSectionRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (socialRef.current) {
        socialRef.current.playSegments([0, 130], true);
      }
      if (seoRef.current) {
        seoRef.current.playSegments([0, 60], true);
      }
      if (uiuxLottieRef.current) {
        uiuxLottieRef.current.playSegments([0, 180], true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getLottieRef = (title) => {
    if (title === "Social Media Marketing") return socialRef;
    if (title === "SEO") return seoRef;
    if (title === "UI/UX Design") return uiuxLottieRef;
    return null;
  };

  return (
    <>
      <div className="relative min-h-screen bg-zinc-200/40 flex flex-col sm:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 pt-20">
        <div className="">
          <Lottie
            lottieRef={getLottieRef("hero-animation")}
            animationData={heroanimation}
            loop
            autoplay
            className="max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:min-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto"
            speed={1}
          />
        </div>

        <div className="flex flex-col items-center sm:items-start sm:ml-10 mt-8 sm:mt-0">
          <span className="text-center sm:text-left text-[#00489c] text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-5">
            Our Services
          </span>
          <div className="flex justify-center w-full sm:items-start sm:mb-5">
            <button
              className="transition-all delay-100 hover:scale-105 cursor-pointer mb-10"
              onClick={() => {
                const yOffset = -40;
                const element = uiuxSectionRef.current;
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              <span className="mt-4 text-lg border-zinc-400 border-1 p-0.5 px-1 rounded-lg text-[#00489c] hover:bg-[#00489c] hover:text-white">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
      <div 
      ref={uiuxSectionRef}
      className="bg-[#eeeeef] grid grid-cols-1 md:grid-cols-3 gap-4 px-5 pt-15">
        <div className="md:col-span-2 text-black p-4">
          <span className="text-zinc-400 text-xs">OUR CAPABILITIES</span>{" "}
          <br></br>
          <h1 className="text-black text-3xl">
            <b>View Our Services.</b>
          </h1>
          <p className="mt-5 text-sm">
            At Paradane, we combine creativity, strategy, and technology to help
            your business stand out online. Our team delivers end-to-end digital
            solutions ranging from designing sleek, user-friendly interfaces to
            building robust websites, optimizing search visibility, and driving
            meaningful engagement through social media. Whether you’re looking
            to establish your online presence or elevate an existing brand, our
            services are designed to help you connect with your audience and
            achieve measurable results.
          </p>
        </div>

        <div className=" text-black p-4 mt-5 h-70 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white">
          <div>
            <Palette size={35} className="p-1 inline-block mr-2 bg-[#00489c] rounded-xl text-white" />
            <div className="mt-5 text-3xl">
              <b>UI/UX Design</b>
            </div>
          </div>

          <p className="text-sm">
            Our UI/UX design services focus on creating intuitive and engaging
            user experiences that drive customer satisfaction and loyalty. We
            leverage the latest design trends and user research to craft
            visually appealing and highly functional interfaces.
          </p>
        </div>

        <div className=" text-black p-4 mt-5 h-70 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white">
          <div>
            <Share2 size={35} className="p-1 inline-block mr-2 bg-[#00489c] rounded-xl text-white" />
            <div className="text-3xl mt-5">
              <b>Social Media Marketing</b>
            </div>
          </div>

          <p className="text-sm">
            Boost your brand presence with our targeted campaigns that drive
            engagement, sales and growth. We create strategies that connect you
            with the right audience.
          </p>
        </div>

        <div className=" text-black p-4 mt-5 h-70 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white">
          <div>
            <Monitor size={35} className=" p-1 inline-block mr-2 bg-[#00489c] rounded-xl text-white" />
            <div className="text-3xl mt-5">
              <b>Web Development</b>
            </div>
          </div>

          <p className="text-sm">
            We build fast, secure, and scalable websites tailored to your
            business needs. From simple landing pages to complex platforms, we
            deliver seamless experiences.
          </p>
        </div>

        <div className=" text-black p-4 mt-5 h-70 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white mb-10">
          <div>
            <Search size={35} className="p-1 inline-block mr-2 bg-[#00489c] rounded-xl text-white" />
            <div className="text-3xl mt-5">
              <b>Search Engine Optimization (SEO)</b>
            </div>
          </div>

          <p className="text-sm">
            Rank higher on Search Engines, get noticed, and grow organically
            with smart SEO strategies. Our approach ensures long-term visibility
            and measurable business results.
          </p>
        </div>
      </div>
    </>
  );
}
