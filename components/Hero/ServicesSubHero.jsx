"use client"

import { motion } from "motion/react"
import { Monitor, Share2, Palette, Search } from "lucide-react";

const ServiceItem = ({label, description, href, icon: Icon}) => {
    return (
        <motion.a
            className="flex flex-col gap-3 bg-white rounded-xl px-4 py-3 shadow-lg backdrop-blur cursor-pointer overflow-hidden relative"
            initial={{ translateY: 125 }}
            whileHover={{ translateY: 0 }}
            transition={{ duration: 0.2 }}
            href={href}
            style={{ willChange: 'height' }}
        >
            <div className="flex">
                <Icon className="text-3xl text-[#00489c]" size={24} />
            </div>
            <span className="text-xl font-semibold text-black flex-shrink-0">{label}</span>
            <span className="text-sm text-black/70 block mt-2">
                {description}
            </span>
            <span className="text-black uppercase block mt-2 text-xs">
                Learn More
            </span>
        </motion.a>
    )
}

const ServicesSubHero = () => {
    return (
        <div className="absolute left-0 right-0 bottom-0 flex flex-col gap-5 z-0 ">
            <div className="absolute left-0 right-0 bottom-32 max-w-7xl mx-auto w-full">
                <div className="text-white font-semibold text-4xl">
                    We engineer and design solutions to address complex business challenges.
                </div>
            </div>
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-4 gap-5" style={{ alignItems: 'start' }}>
                    <ServiceItem href={"#"} label={"Website Development"} description={"We build fast, secure, and scalable websites tailored to your business needs. From simple landing pages to complex platforms, we deliver seamless digital experiences."} icon={Monitor} />
                    <ServiceItem href={"#"} label={"Social Media Marketing"} description={"Boost your brand presence with targeted campaigns that drive engagement and growth. We create strategies that connect you with the right audience."} icon={Share2} />
                    <ServiceItem href={"#"} label={"UI/UX Design"} description={"Designs that put users first—intuitive, attractive, and conversion-focused. We craft digital experiences that keep people engaged and coming back."} icon={Palette} />
                    <ServiceItem href={"#"} label={"Search Engine Optimization"} description={"Rank higher, get noticed, and grow organically with smart SEO strategies. Our approach ensures long-term visibility and measurable business results."} icon={Search} />
                </div>
            </div>
        </div>
    )
}

export default ServicesSubHero;