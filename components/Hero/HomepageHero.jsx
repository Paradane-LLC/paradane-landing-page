import BackgroundHero from "@/public/images/background-homepage-hero.jpg"
import ServicesSubHero from "@/components/Hero/ServicesSubHero";

const HomepageHero = () => {
    return (
        <div className="min-h-screen bg-top-left bg-cover bg-no-repeat -z-10" style={{
            backgroundImage: `url(${BackgroundHero.src})`
        }}>
            <div className="bg-[#00489c]/80 text-white min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="-mt-[125px]">
                        <div className="flex flex-col gap-8 w-2xl">
                            <div className="flex flex-col gap-3">
                                <span className="text-6xl text-white/80">We engineer intelligent software solutions that power <span className="font-semibold text-white">the digital era</span>.</span>
                            </div>
                            <span className="text-2xl font-semibold text-white/80">At the heart of our work is a commitment to innovation. We design and develop future-ready software solutions.</span>
                            <button className="relative hover:scale-105 text-xl text-[#00489c] font-semibold bg-white px-5 py-2 rounded-lg max-w-fit cursor-pointer transition-all z-10">
                                <div className="absolute inset-0 bg-white scale-60 -z-10 animate-ping rounded-lg" />
                                Book a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          <ServicesSubHero />
        </div>
    )
}

export default HomepageHero;