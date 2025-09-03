"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";

const DynamicBlackSection = () => {
    return (
        <div className="relative min-h-screen header-black-dynamic overflow-hidden">
            <div className="relative inset-0 bg-zinc-900 text-white min-h-screen z-10">
                <div className="flex py-10 max-w-7xl mx-auto px-8 lg:px-0">
                    <span className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">Solution That Just <LineShadowText className="italic" shadowColor={"white"}>Works</LineShadowText>.</span>
                </div>
            </div>
        </div>
    )
}

export default DynamicBlackSection;