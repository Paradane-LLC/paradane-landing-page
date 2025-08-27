import BackgroundHero from "@/public/images/background-homepage-hero.jpg"
import ServicesSubHero from "@/components/Hero/ServicesSubHero";

const HomepageHero = () => {
    return (
        <div className="min-h-screen bg-center bg-cover bg-no-repeat -z-10" style={{
            backgroundImage: `url(${BackgroundHero.src})`
        }}>
            <div className="bg-[#00489c]/80 text-white min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="-mt-[80px]">
                        <div className="flex flex-col gap-8 w-2xl">
                            <div className="flex flex-col">
                                <span className="text-6xl text-white/80">We engineer intelligent & modern software for <span className="font-semibold text-white">the digital era</span>.</span>
                            </div>
                            <button className="relative hover:scale-105 text-xl text-[#00489c] font-semibold bg-white px-5 py-2 rounded-lg max-w-fit cursor-pointer transition-all z-10">
                                <div className="absolute inset-0 bg-white scale-60 -z-10 animate-ping rounded-lg" />
                                Book a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-32 max-w-7xl mx-auto w-full">
                <div className="text-white font-semibold text-4xl">
                    Trusted by thousands to design solutions for complex business challenges.
                </div>
            </div>
        </div>
    )
}

export default HomepageHero;