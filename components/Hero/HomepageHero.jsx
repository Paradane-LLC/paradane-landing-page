import Image from "next/image"

const HomepageHero = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Image with Next.js optimization */}
            <Image
                src="https://cdn.paradane.com/images/background-homepage-hero.jpg"
                alt="Background hero image"
                fill
                className="object-cover -z-10 select-none"
                quality={85}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00489c]/80 text-white min-h-screen flex items-center z-10">
                <div className="max-w-7xl mx-2 sm:mx-6 xl:mx-auto w-full">
                    <div className="-mt-[120px] xl:-mt-[80px]">
                        <div className="flex flex-col gap-3 sm:gap-8 sm:max-w-2xl">
                            <span className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-white/80">
                                We engineer intelligent & modern software for{" "}
                                <span className="font-bold text-white">the digital era</span>.
                            </span>
                            <button className="relative hover:scale-105 text-base xl:text-xl text-[#00489c] font-semibold bg-white px-5 py-2 rounded-xl max-w-fit cursor-pointer transition-all z-10">
                                <div className="absolute inset-0 bg-white scale-60 -z-10 animate-ping rounded-xl" />
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden xl:block absolute left-0 right-0 bottom-32 max-w-7xl mx-auto w-full z-10">
                <div className="text-white font-semibold text-4xl">
                    Trusted by thousands to design solutions for complex business challenges.
                </div>
            </div>
        </div>
    )
}

export default HomepageHero
