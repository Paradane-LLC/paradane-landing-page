"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";

import { CheckCheckIcon, CheckIcon, CheckCircle, CheckCircle2, Check, CheckCheck, CheckCircle2Icon, CheckCircleIcon, CheckLine, CheckLineIcon, CheckSquare, CheckSquare2, CheckSquare2Icon, CheckSquareIcon, StopCircleIcon, Croissant, Ban, BanIcon } from "lucide-react";

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
  const uiuxSectionRef = useRef();

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
      <div className="relative min-h-screen bg-zinc-200/40 flex flex-col items-left justify-center px-40">
        <div className="height: 100vh width: 100vw ">
          <Lottie
            lottieRef={getLottieRef("hero-animation")}
            animationData={heroanimation}
            loop
            autoplay
            style={{ width: 750, height: 750 }}
            speed={1}
          />
        </div>
        <div className="flex flex-col -mt-70">
          <span className="text-balance text-center text-[#00489c] text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-5">
            Our Services
          </span>
          <button
            className="transition-all delay-100 hover:scale-105 cursor-pointer"
            onClick={() => {
              const yOffset = -96;
              const element = uiuxSectionRef.current;
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            <span className="mt-20 text-lg border-zinc-400 border-1 p-0.5 px-1 rounded-lg text-[#00489c] hover:bg-[#00489c] hover:text-white">
              Learn More
            </span>
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-zinc-300/40">
        <div ref={uiuxSectionRef} className="flex flex-row gap-8 p-8">
          <div className="bg-[#00489c]/10 p-4 rounded-2xl">
            <Lottie
              lottieRef={getLottieRef("UI/UX Design")}
              animationData={uiux}
              loop
              autoplay
              style={{ width: 500, height: 500 }}
              speed={1}
            />
          </div>
          <div className="p-4 rounded-2xl">
            <h1 className="text-5xl font-bold">UI/UX Design</h1>
            <p className="text-lg mt-4 max-w-2xl text-left">
              Our UI/UX design services focus on creating intuitive and engaging
              user experiences that drive customer satisfaction and loyalty. We
              leverage the latest design trends and user research to craft
              visually appealing and highly functional interfaces.
            </p>

            <li className="mt-10 ml-10">
              <span>
                Well-designed user interfaces can improve conversion rates by up
                to{" "}
                <GlowingText
                  className="inline-block"
                  text="200%"
                  tcolor="green-500"
                  tsize="lg"
                  time="2s"
                  tshadow="#b2deb5"
                />
                .
              </span>
            </li>
            <li className="mt-5 ml-10">
              <span>
                <GlowingText
                  className="inline-block"
                  text="88%"
                  tcolor="red-500"
                  tsize="lg"
                  time="2s"
                  tshadow="#f87171"
                />{" "}
                of users won’t return after a bad website experience.
              </span>
            </li>
            <li className="mt-5 ml-10">
              <span>
                Strong UX can reduce development costs by up to  
                <GlowingText
                  className="inline-block"
                  text=" 50%"
                  tcolor="green-500"
                  tsize="lg"
                  time="2s"
                  tshadow="#49ac51"
                />{" "} 
                throughfewer revisions and customer complaints.
              </span>
            </li>
          </div>
        </div>
        <div className="flex flex-row gap-8 p-8 justify-end">
          <div className=" p-4 rounded-2xl">
            <h1 className="text-5xl font-bold">Social Media Marketing</h1>
            <p className="text-lg mt-4 max-w-2xl text-left">
              Boost your brand presence with our targeted campaigns that drive
              engagement, sales and growth. We create strategies that connect
              you with the right audience.
            </p>
            <li className="mt-10 ml-10">
              77% of consumers are more likely to buy from brands they follow on
              social media.
            </li>
            <li className="mt-5 ml-10">
              Businesses with social media strategies see 24% faster revenue
              growth.
            </li>
            <li className="mt-5 ml-10">
              Over 54% of social browsers use social platforms to research
              products.
            </li>
          </div>
          <div className="bg-[#00489c]/10 p-4 rounded-2xl">
            <Lottie
              lottieRef={getLottieRef("Social Media Marketing")}
              animationData={social}
              loop
              autoplay
              style={{ width: 500, height: 500 }}
              speed={1}
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 p-8 justify-start">
          <div className="bg-[#00489c]/10 p-4 rounded-2xl">
            <Lottie
              lottieRef={getLottieRef("Web Development")}
              animationData={web}
              loop
              autoplay
              style={{ width: 500, height: 500 }}
              speed={1}
            />
          </div>
          <div className=" p-4 rounded-2xl">
            <h1 className="text-5xl font-bold">Web Development</h1>
            <p className="text-lg mt-4 max-w-2xl text-left">
              We build fast, secure, and scalable websites tailored to your
              business needs. From simple landing pages to complex platforms, we
              deliver seamless experiences.
            </p>
            <li className="mt-10 ml-10">
              Well-designed user interfaces can improve conversion rates by up
              to 200%.
            </li>
            <li className="mt-5 ml-10">
              88% of users won’t return after a bad website experience.
            </li>
            <li className="mt-5 ml-10">
              Strong UX can reduce development costs by up to 50% through fewer
              revisions and customer complaints.
            </li>
          </div>
        </div>
        <div className="flex flex-row gap-8 p-8 justify-end">
          <div className="p-4 rounded-2xl">
            <h1 className="text-5xl font-bold">
              Search Engine Optimization (SEO)
            </h1>
            <p className="text-lg mt-4 max-w-2xl text-left">
              Rank higher on Search Engines, get noticed, and grow organically
              with smart SEO strategies. Our approach ensures long-term
              visibility and measurable business results.
            </p>
            <li className="mt-10 ml-10">
              77% of consumers are more likely to buy from brands they follow on
              social media.
            </li>
            <li className="mt-5 ml-10">
              Businesses with social media strategies see 24% faster revenue
              growth.
            </li>
            <li className="mt-5 ml-10">
              Over 54% of social browsers use social platforms to research
              products.
            </li>
          </div>
          <div className="bg-[#00489c]/10 p-4 rounded-2xl">
            <Lottie
              lottieRef={getLottieRef("SEO")}
              animationData={seo}
              loop
              autoplay
              style={{ width: 500, height: 500 }}
              speed={1}
            />
          </div>
        </div>
      </div>
      {/* <div className="relative min-h-screen bg-[#00489c]/80">
        <Image
          src="/services-background.svg"
          alt="Background hero image"
          fill
          className="-z-10 select-none"
        />

        <div className="relative z-10 flex flex-col items-center text-white py-16 px-4">
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
      </div> */}
      {/* Pricing Section */}
      <div className="relative min-h-screen bg-white/10">
        <Image
          src="/services-background.svg"
          alt="Background hero image"
          fill
          className="-z-10 select-none"
        />
        <div className="relative z-10 flex flex-col items-center text-[#00489c] py-16 px-4">
          <h2 className="text-3xl text-left font-bold ml-4 mb-4">
            Our Pricing Models
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
            <div className="w-95 h-130 bg-[#ffff]/90 text-[#00489c] rounded-2xl shadow-2xl flex flex-col p-4 border border-[#4e4b66]">
              <p className="text-3xl text-left font-bold ml-4 mt-8 mb-4">
                LUMP SUM
              </p>
              <div className="space-y-3">
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Web Design And Development </p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">$25/mo Hosting</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">$100 fee Per Page after 5</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">
                    +$50/mo Unlimited Edits Add-on
                  </p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">+$250 To Add A Blog</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4 text-[#4e4b66] font-normal">
                    24/7 Support
                  </p>
                  <p className="w-10 pr-10 text-zinc-300"><BanIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4 text-[#4e4b66]">
                    Lifetime Updates
                  </p>
                  <p className="w-10 pr-10 text-zinc-300"><BanIcon /></p>
                </div>
                <div className="flex items-end mt-10">
                  <h1 className="text-5xl font-semibold">$3800 </h1>
                  <p className="self-end text-[#4e4b66] text-sm">
                    +$25/mo Hosting
                  </p>
                </div>
                <div className="pt-5">
                  <button className="p-3 bg-[#00489c]/80 font-bold text-white rounded-2xl transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="w-95 h-140 bg-[#336db0]/95 text-white rounded-2xl shadow-2xl flex flex-col p-4">
              <h1 className="text-3xl text-left font-bold ml-4 mt-8 mb-4">
                MONTHLY
              </h1>
              <div className="space-y-3">
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Design And Development </p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Includes Hosting</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">$100 fee Per Page after 5</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">
                    +$50/mo Unlimited Edits Add-on
                  </p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">+$250 To Add A Blog</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Unlimited Edits</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">24/7 Support</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-2 w-full">
                  <p className="text-left pl-4">Lifetime Updates</p>
                  <p className="w-10 pr-10"><CheckCircleIcon /></p>
                </div>
              </div>
              <div className="flex items-end mt-10">
                <h1 className="text-5xl font-semibold">$250 </h1>
                <p className="self-end text-sm ml-1">per month</p>
              </div>
              <div className="pt-5">
                <button className="p-3 bg-white text-[#00489c] font-bold rounded-2xl transition-transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-95 h-130 bg-white text-[#00489c] rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-6 border border-[#4e4b66]">
              <p className="text-xl font-semibold">PLACEHOLDER</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
