import Image from "next/image";
import ServicesSubHero from "../Hero/ServicesSubHero";
import { 
    Code2Icon, 
    RocketIcon, 
    PenIcon, 
    SearchIcon, 
    Layers3Icon, 
    TrendingUpIcon
  } from "lucide-react";
import HowWeWorkAnimatedSculpture from "@/public/images/how-we-work-animated-sculpture.webp"

const ProcessList = [
    {
        id: 1,
        label: "Discovery",
        description: "In-depth research and analysis are gathered and key requirements are understood",
        icon: SearchIcon
    },
    {
        id: 2,
        label: "Wireframe and Prototype",
        description: "Creating a design blueprint for an early preview of the final visual aesthetics",
        icon: Layers3Icon
    },
    {
        id: 3,
        label: "Design",
        description: "Creating visual appealing and user-friendly interfaces",
        icon: PenIcon
    },
    {
        id: 4,
        label: "Development",
        description: "Process of programming and building the functional components and features",
        icon: Code2Icon
    },
    {
        id: 5,
        label: "Scalability",
        description: "Ensuring the system is optimized to handle growth, performance demands, and future enhancements without compromising efficiency",
        icon: TrendingUpIcon
    },
    {
        id: 6,
        label: "Launch and Grow",
        description: "Process of deploying with continuous, functional and optimize way",
        icon: RocketIcon
    },
]

const ListItem = ({id, label, description, icon: Icon}) => {
    return (
        <div className="flex gap-5 items-center pb-5">
            <div className="flex flex-col gap-2 grow">
                <div className="flex items-center gap-2 text-zinc-700  text-2xl font-semibold">
                    <div className="">
                        <span>#{id}</span>
                    </div>
                    <div className="">
                        <span>{label}</span>
                    </div>
                </div>
                <div className="text-zinc-700 tracking-wider text-lg">
                    {description}
                </div>
            </div>
            <div className="flex items-center justify-center rounded-full bg-zinc-100 min-h-18 min-w-18">
                <Icon className="text-[#00489c]" size={28} />
            </div>
        </div>
    )
}

const HowWeWorkSection = () => {
    return (
        <div className="min-h-screen">
            <div className="relative inset-0 bg-gray-50/80 min-h-screen z-10">
                <ServicesSubHero />
                <div className="flex flex-col gap-10 max-w-7xl mx-auto w-full pt-72 pb-20 z-20">
                    <div className="flex items-center justify-between">
                        <div className="max-w-xs">
                            <span className="text-5xl font-bold text-zinc-900">How We Work<span className="text-[#00489c]">.</span></span>
                        </div>
                        <div className="max-w-xl">
                            <span className="text-zinc-700 text-xl tracking-wider">Gain insight into our approach, process, workflows, and methodology when working with clients.</span>
                        </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-xs shadow-lg rounded-3xl w-full">
                        <div className="grid grid-cols-2 gap-20">
                            <div className="flex flex-col gap-5 p-8">
                                <div className="flex flex-col gap-3">
                                    <span className="text-2xl font-semibold text-zinc-700">Our innovative approach</span>
                                    <span className="text-lg text-zinc-700">Get valuable insights into our innovative approaches, proven strategies, and meticulous methodologies that drive our successful delivery of services and products.</span>
                                </div>
                                <div className="relative w-full h-full">
                                    <Image className="object-contain" src={HowWeWorkAnimatedSculpture} fill />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 p-8 divide-y divide-zinc-200">
                                {ProcessList.map((item) => (
                                    <ListItem key={item.id} id={item.id} label={item.label} description={item.description} icon={item.icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWorkSection;