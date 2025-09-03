"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";  
import { LineShadowText } from "@/components/magicui/line-shadow-text";

const DynamicBlackSection = () => {
    return (
        <div className="relative min-h-screen header-black-dynamic overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#001d3f] to-zinc-900" />
            <div className="relative inset-0 bg-zinc-900/90 text-white min-h-screen z-10">
                <div className="flex py-10 max-w-7xl mx-auto px-8">
                    <span className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">Solution That Just <LineShadowText className="italic" shadowColor={"white"}>Works</LineShadowText>.</span>
                </div>
            </div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(1024px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    )
}

export default DynamicBlackSection;