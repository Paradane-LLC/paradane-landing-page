"use client"

import { Monitor, Share2, Palette, Search } from "lucide-react";
import Link from "next/link";

const ServiceItem = ({label, description, href, icon: Icon}) => {
    return (
        <Link
            className="flex flex-col gap-3 bg-white rounded-3xl px-5 py-5 mx-2 sm:mx-0 border xl:border-none border-[#00489c]/10 xl:shadow-xl backdrop-blur cursor-pointer relative z-10 group xl:hover:scale-105 transition-all min-w-[300px]"
            href={href}
        >
            <div className="flex">
                <Icon className="text-2xl xl:text-3xl text-[#00489c]/80 group-hover:text-[#00489c]" size={24} />
            </div>
            <span className="text-xl xl:text-xl font-semibold text-zinc-700 group-hover:text-black flex-shrink-0">{label}</span>
            <p className="text-sm xl:text-base text-zinc-700 group-hover:text-black mt-2 tracking-wider line-clamp-3">
                {description}
            </p>
            <span className="text-zinc-700 group-hover:text-black block mt-2 text-sm xl:text-xl">
                Learn More
            </span>
        </Link>
    )
}

const ServicesSubHero = () => {
    return (
        <div className="absolute -top-28 xl:-top-22 right-0 left-0 flex flex-col gap-5 z-10">
            <div className="max-w-7xl mx-auto w-full h-full">
                <div className="flex xl:mx-0 xl:grid xl:grid-cols-4 sm:gap-5 px-0 sm:px-6 xl:px-0 overflow-x-scroll xl:overflow-visible no-scrollbar" style={{ alignItems: 'start' }}>
                    <ServiceItem href={"#"} label={"Website Development"} description={"We build fast, secure, and scalable websites tailored to your business needs. From simple landing pages to complex platforms, we deliver seamless experiences."} icon={Monitor} />
                    <ServiceItem href={"#"} label={"Social Media Marketing"} description={"Boost your brand presence with our targeted campaigns that drive engagement, sales and growth. We create strategies that connect you with the right audience."} icon={Share2} />
                    <ServiceItem href={"#"} label={"User Interface Design"} description={"Designs that always put users first—intuitive, attractive, and conversion-focused. We craft digital experiences that keep people engaged and coming back."} icon={Palette} />
                    <ServiceItem href={"#"} label={"Search Engine Optimization"} description={"Rank higher on Search Engines, get noticed, and grow organically with smart SEO strategies. Our approach ensures long-term visibility and measurable business results."} icon={Search} />
                </div>
            </div>
        </div>
    )
}

export default ServicesSubHero;