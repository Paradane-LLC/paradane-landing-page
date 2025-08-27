import ServicesSubHero from "../Hero/ServicesSubHero";

const HowWeWorkSection = () => {
    return (
        <div className="min-h-screen">
            <div className="relative inset-0 bg-gray-50/80 min-h-screen z-10">
                <ServicesSubHero />
                <div className="flex flex-col gap-5 max-w-7xl mx-auto w-full pt-60 z-20">
                    <div className="flex items-center justify-between">
                        <div className="max-w-xs">
                            <span className="text-5xl font-bold text-zinc-700">How We Work<span className="text-[#00489c]">.</span></span>
                        </div>
                        <div className="max-w-xl">
                            <span className="text-zinc-700 text-xl tracking-wider">Gain insight into our approach, process, workflows, and methodology when working with clients.</span>
                        </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-xs shadow-lg rounded-xl h-96 w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWorkSection;