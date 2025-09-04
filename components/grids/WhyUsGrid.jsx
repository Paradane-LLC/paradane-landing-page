import {
    BellIcon,
    CalendarIcon,
    GlobeIcon,
    CodeIcon,
    PersonIcon,
    StarIcon,
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Highlighter } from "../magicui/highlighter";
  
  const features = [
    {
      Icon: PersonIcon,
      name: "Different Cultures, Different Backgrounds",
      description: "We are not stationed at one particular area, we have a dedicated team from America, Europe, Asia and Middle-East all working remotely.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: StarIcon,
      name: "We deliver what we promise",
      description: "Having doubts? Our clients vouch for us.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: CodeIcon,
      name: "Flexible to any language / framework",
      description:
        "We have dedicated team for each programming language and framework.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export function WhyUsGrid() {
    return (
        <div className="flex flex-col gap-5 lg:gap-10 py-10 max-w-7xl mx-auto px-8 lg:px-0">
            <span className="text-balance z-50 text-zinc-100 font-bold leading-none tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl">What makes us <Highlighter color="#3f3f46">different</Highlighter>?</span>
            <BentoGrid className="lg:grid-rows-3 dark">
                {features.map((feature) => (
                <BentoCard className="" key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
  }
  