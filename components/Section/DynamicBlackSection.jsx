"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { PortfolioMarquee } from "../marquees/PortfolioMarquee";
import { Highlighter } from "../magicui/highlighter";

const DynamicBlackSection = () => {
    return (
        <div className="relative">
            <div className="relative h-[100px] w-full overflow-hidden bg-background z-40">
                <FlickeringGrid
                className="absolute inset-0 z-0 size-full w-full"
                squareSize={10}
                gridGap={10}
                color="#18181b"
                maxOpacity={0.1}
                flickerChance={0.1}
                height={800}
                />
            </div>
            <div className="relative min-h-screen header-black-dynamic bg-zinc-900 text-white">
                <div className="absolute top-0 left-0 right-0 h-[100px] w-full overflow-hidden">
                    <FlickeringGrid
                    className="absolute inset-0 z-0 size-full w-full"
                    squareSize={10}
                    gridGap={10}
                    color="#fff"
                    maxOpacity={0.1}
                    flickerChance={0.1}
                    height={800}
                    />
                </div>
                <div className="flex flex-col gap-2 py-10 max-w-7xl mx-auto px-8 lg:px-0">
                    <span className="text-balance z-50 text-zinc-100 text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">Solution That Just <LineShadowText className="italic" shadowColor={"white"}>Works</LineShadowText>.</span>
                    <span className="text-balance text-zinc-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Companies choose <Highlighter action="underline" color="#00489c">Paradane</Highlighter> to build their landing pages.</span>
                </div>
                <PortfolioMarquee />
            </div>
        </div>
    )
}

export default DynamicBlackSection;