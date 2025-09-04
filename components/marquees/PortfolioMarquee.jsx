"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

import PortfolioImage1 from "@/public/images/screenshots/1756931192615.png"
import PortfolioImage2 from "@/public/images/screenshots/1756931259651.png"
import PortfolioImage3 from "@/public/images/screenshots/1756931334261.png"
import PortfolioImage4 from "@/public/images/screenshots/1756931459764.png"
import PortfolioImage5 from "@/public/images/screenshots/1756931718623.png"
import PortfolioImage6 from "@/public/images/screenshots/1756931785383.png"
import PortfolioImage7 from "@/public/images/screenshots/1756931836431.png"
import PortfolioImage8 from "@/public/images/screenshots/1756932082934.png"
import PortfolioImage9 from "@/public/images/screenshots/1756932234223.png"

const screenshots = [
  {
    id: 0,
    website: 'S2S Marketing Blog',
    domain: 's2smark.com',
    img: PortfolioImage1,
  },
  {
    id: 1,
    website: 'AH Group Website',
    domain: 'ahgroup-pk.com',
    img: PortfolioImage3,
  },
  {
    id: 2,
    website: 'AslaseChat Chatbot',
    domain: 'aslasechat.com',
    img: PortfolioImage5,
  },
  {
    id: 3,
    website: 'Automatic Chat',
    domain: 'automatic.chat',
    img: PortfolioImage6,
  },
  {
    id: 4,
    website: 'Graana',
    domain: 'graana.com',
    img: PortfolioImage7,
  },
  {
    id: 5,
    website: 'S2S Marketing Website',
    domain: 's2smark.com',
    img: PortfolioImage2,
  },
  {
    id: 6,
    website: 'Yoga Studio',
    domain: 'yoga.studio',
    img: PortfolioImage8,
  },
  {
    id: 7,
    website: 'Minimal Design Studio',
    domain: 'minimal.design',
    img: PortfolioImage9,
  },
  {
    id: 8,
    website: 'AH Group Blog',
    domain: 'ahgroup-pk.com',
    img: PortfolioImage4,
  },
];

const firstRow = screenshots.slice(0, screenshots.length);

const ScreenshotCard = ({
  img,
  website,
  domain
}) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer transition-all ease-in-out hover:saturate-100 hover:opacity-100 saturate-60 opacity-60",
      )}
    >
        <div className="relative w-[250px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-lg overflow-hidden">
        <Image className="object-cover" alt={`${website} (${domain})`} src={img} fill />
        </div>
        <div className="flex flex-col mt-2">
            <span className="text-zinc-300 font-semibold text-lg">{website}</span>
            <span className="text-zinc-500 text-base">{domain}</span>
        </div>
    </figure>
  );
};

export function PortfolioMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:60s]">
        {firstRow.map((screenshot) => (
          <ScreenshotCard key={screenshot.id} {...screenshot} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-900"></div>
    </div>
  );
}
