import { Highlighter } from "../magicui/highlighter";
import { Marquee } from "@/components/magicui/marquee";
import { StarIcon } from "lucide-react";
import { reviews } from "../data/reviews";
import { UserIcon } from "lucide-react";

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-zinc-800/75 lg:bg-zinc-800/50 text-zinc-100 rounded-xl shadow-lg p-6 w-96 flex-shrink-0">
            <div className="flex items-center gap-4">
                {review.picture ? (
                    <img
                        src={review.picture}
                        alt={review.name}
                        className="w-14 h-14 object-cover rounded-full border border-zinc-700"
                    />
                ) : (
                    <div className="w-14 h-14 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-700">
                        <UserIcon className="w-8 h-8 text-zinc-400" />
                    </div>
                )}
                <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-zinc-400">
                        {review.position} @ {review.company}
                    </p>
                </div>
            </div>
            <p className="mt-4 text-zinc-300">"{review.review}"</p>
            <div className="mt-3 flex">
                {[...Array(5)].map((_, i) => (
                    <StarIcon
                        key={i}
                        size={18}
                        className={`${
                            i < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-zinc-500"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const ReviewSection = () => {
    return (
        <div className="pb-52">
            <div className="flex flex-col gap-5 lg:gap-10 py-10 max-w-7xl mx-auto px-8 lg:px-0">
                <span className="text-balance z-50 text-zinc-100 font-semibold leading-none tracking-tighter text-3xl md:text-4xl lg:text-5xl">
                    Hear it from our{" "}
                    <Highlighter multiline action="underline" className="z-40" color="#3f3f46">
                        clients
                    </Highlighter>
                </span>
            </div>
            <div className="relative w-full overflow-hidden">
                <Marquee className="[--duration:90s]">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-900"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-900"></div>
            </div>
        </div>
    )
}

export default ReviewSection;