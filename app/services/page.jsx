"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
import { Monitor, Share2, Palette, Search } from "lucide-react";

// import {
//   CheckCheckIcon,
//   CheckIcon,
//   CheckCircle,
//   CheckCircle2,
//   Check,
//   CheckCheck,
//   CheckCircle2Icon,
//   CheckCircleIcon,
//   CheckLine,
//   CheckLineIcon,
//   CheckSquare,
//   CheckSquare2,
//   CheckSquare2Icon,
//   CheckSquareIcon,
//   StopCircleIcon,
//   Croissant,
//   Ban,
//   BanIcon,
// } from "lucide-react";

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
      <div className="relative min-h-screen bg-zinc-200/40 flex sm:flex-col flex-row items-left justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="height: 100vh width: 100vw ">
          <Lottie
            lottieRef={getLottieRef("hero-animation")}
            animationData={heroanimation}
            loop
            autoplay
            className="w-full max-w-xs min-w-[80px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
            speed={1}
          />
        </div>
        <div className="flex flex-col lg:pl-80 lg:-mt-70 md:-mt-20 md:pl-40 xl:px-0">
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

      {/* <div className="min-h-screen bg-zinc-300/40">
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
              <GlowingText
                className="inline-block"
                text="77% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />
              of consumers are more likely to buy from brands they follow on
              social media.
            </li>
            <li className="mt-5 ml-10">
              Businesses with social media strategies see{" "}
              <GlowingText
                className="inline-block"
                text="24% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />{" "}
              faster revenue growth.
            </li>
            <li className="mt-5 ml-10">
              Over{" "}
              <GlowingText
                className="inline-block"
                text="54% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />{" "}
              of social browsers use social platforms to research products.
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
              <GlowingText
                className="inline-block"
                text="75% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />{" "}
              of users judge a company’s credibility based on its website
              design. .
            </li>
            <li className="mt-5 ml-10">
              Websites that load within <strong className="">2 seconds</strong>{" "}
              have a lower bounce rate by{" "}
              <GlowingText
                className="inline-block"
                text="50% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />
              .
            </li>
            <li className="mt-5 ml-10">
              Mobile-friendly sites capture up to{" "}
              <GlowingText
                className="inline-block"
                text="70% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />{" "}
              more leads from smartphone users.
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
              <strong className="text-xl animate-pulse">90%</strong> of clicks
              go to results on the first page of Google.
            </li>
            <li className="mt-5 ml-10">
              SEO drives{" "}
              <GlowingText
                className="inline-block"
                text="1000% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />
              + more traffic than organic social media.
            </li>
            <li className="mt-5 ml-10">
              Leads from SEO have a{" "}
              <GlowingText
                className="inline-block"
                text="14.6% "
                tcolor="green-500"
                tsize="lg"
                time="2s"
                tshadow="#b2deb5"
              />{" "}
              close rate, compared to just 1.7% for outbound methods.
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
      </div> */}

      {/* Optional different section for services */}
      
      <div className="bg-[#eeeeef] grid grid-cols-1 md:grid-cols-3 gap-4 px-5 mt-5">
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

        <div className=" text-black p-4 mt-5 h-80 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white">
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
      
        <div className=" text-black p-4 mt-5 h-80 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white">
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

        <div className=" text-black p-4 mt-5 h-80 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white">
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

        <div className=" text-black p-4 mt-5 h-80 border-2 border-zinc-300 rounded-lg flex flex-col justify-between hover:bg-[#00489c] transition-colors hover:text-white mb-10">
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
