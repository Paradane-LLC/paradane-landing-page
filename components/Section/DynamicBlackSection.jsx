"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { PortfolioMarquee } from "../marquees/PortfolioMarquee";

const DynamicBlackSection = () => {
    return (
        <div className="relative min-h-screen header-black-dynamic bg-zinc-900 text-white">
            <div className="flex flex-col gap-2 py-10 max-w-7xl mx-auto px-8 lg:px-0">
                <span className="text-balance text-zinc-100 text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">Solution That Just <LineShadowText className="italic" shadowColor={"white"}>Works</LineShadowText>.</span>
                <span className="text-balance text-zinc-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Companies choose Paradane to build their landing pages.</span>
            </div>
            <PortfolioMarquee />
        </div>
    )
}

export default DynamicBlackSection;