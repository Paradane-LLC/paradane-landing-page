"use client"

import { Monitor, Share2, Palette, Search } from "lucide-react";
import Link from "next/link";

const ServiceItem = ({label, description, href, icon: Icon}) => {
    return (
        <Link
            className="flex flex-col gap-3 bg-white rounded-3xl px-5 py-5 shadow-lg backdrop-blur cursor-pointer overflow-hidden relative z-10"
            href={href}
        >
            <div className="flex">
                <Icon className="text-3xl text-[#00489c]" size={24} />
            </div>
            <span className="text-xl font-semibold text-zinc-900 flex-shrink-0">{label}</span>
            <span className="text-base text-zinc-700 block mt-2">
                {description}
            </span>
            <span className="text-zinc-700 block mt-2 text-lg">
                Learn More
            </span>
        </Link>
    )
}

const ServicesSubHero = () => {
    return (
        <div className="absolute -top-22 right-0 left-0 flex flex-col gap-5 z-10">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-4 gap-5" style={{ alignItems: 'start' }}>
                    <ServiceItem href={"#"} label={"Website Development"} description={"We build fast, secure, and scalable websites tailored to your business needs. From simple landing pages to complex platforms, we deliver seamless digital experiences."} icon={Monitor} />
                    <ServiceItem href={"#"} label={"Social Media Marketing"} description={"Boost your brand presence with targeted campaigns that drive engagement and growth. We create strategies that connect you with the right audience."} icon={Share2} />
                    <ServiceItem href={"#"} label={"User Interface Design"} description={"Designs that always put users first—intuitive, attractive, and conversion-focused. We craft digital experiences that keep people engaged and coming back."} icon={Palette} />
                    <ServiceItem href={"#"} label={"Search Engine Optimization"} description={"Rank higher, get noticed, and grow organically with smart SEO strategies. Our approach ensures long-term visibility and measurable business results."} icon={Search} />
                </div>
            </div>
        </div>
    )
}

export default ServicesSubHero;