
import { Highlighter } from "../magicui/highlighter";
import {
  ShieldCheck,
  Code2,
  Cpu,
  Users,
  Award,
  Clock,
  Network,
  Lightbulb,
  Lock,
  Repeat,
  Server,
  Rocket,
  Bug,
  Globe,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";


const workFeatures = [
  {
    id: 0,
    icon: ShieldCheck,
    label: "Quality Assurance",
    description: "Dedicated QA team ensuring flawless product delivery from day one."
  },
  {
    id: 1,
    icon: Code2,
    label: "Clean Code",
    description: "We follow best coding practices to deliver maintainable, efficient, and scalable solutions."
  },
  {
    id: 2,
    icon: Cpu,
    label: "Modern Technology",
    description: "We leverage the latest frameworks and tools to build cutting-edge applications."
  },
  {
    id: 3,
    icon: Users,
    label: "Expert Team",
    description: "Our skilled developers and designers work hand-in-hand to achieve excellence."
  },
  {
    id: 4,
    icon: Award,
    label: "Proven Excellence",
    description: "Recognized by industry leaders for delivering high-quality digital products."
  },
  {
    id: 5,
    icon: Clock,
    label: "On-Time Delivery",
    description: "We value your time and ensure projects are completed before deadlines."
  },
  {
    id: 6,
    icon: Network,
    label: "Scalable Solutions",
    description: "Our systems are built to grow with your business needs seamlessly."
  },
  {
    id: 7,
    icon: Lightbulb,
    label: "Innovative Mindset",
    description: "We constantly innovate to provide unique solutions tailored to your goals."
  },
  {
    id: 8,
    icon: Lock,
    label: "Data Security",
    description: "Your data is protected with industry-standard compliance and best practices."
  },
  {
    id: 9,
    icon: Repeat,
    label: "Agile Process",
    description: "We follow agile methodologies to adapt quickly to changes and deliver value continuously."
  },
  {
    id: 10,
    icon: Server,
    label: "Reliable Infrastructure",
    description: "Robust hosting & deployment strategies ensure your product stays online and fast."
  },
  {
    id: 11,
    icon: Rocket,
    label: "Performance Driven",
    description: "Optimized for speed, efficiency, and long-lasting impact with every project."
  },
  {
    id: 12,
    icon: Bug,
    label: "Proactive Testing",
    description: "Automated and manual tests catch potential issues before they reach production."
  },
  {
    id: 13,
    icon: Globe,
    label: "Global Standards",
    description: "We comply with international software development and quality benchmarks."
  },
  {
    id: 14,
    icon: PhoneCall,
    label: "Excellent Support",
    description: "We provide 24/7 support and transparent communication throughout the project."
  },
]

function ListItem({label, description, icon: Icon}) {
  return (
    <div className="relative flex flex-col gap-3 bg-zinc-800/75 lg:bg-zinc-800 border border-zinc-800 shadow rounded-xl w-full transition-all ease-linear group p-5 lg:py-10 lg:filter lg:saturate-75 lg:opacity-75 hover:lg:saturate-100 hover:lg:opacity-100 cursor-pointer">
      <div>
        <Icon className="text-zinc-300" size={40} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl lg:text-2xl font-semibold text-zinc-300">{label}</span>
        <span className="text-base lg:text-lg text-zinc-400">{description}</span>
      </div>
    </div>
  )
}
  
export function WhyUsSection() {



  return (
    <div className="flex flex-col gap-5 lg:gap-10 py-10 max-w-7xl mx-auto px-8 lg:px-0">
      {/* Header */}
      <span className="text-balance z-50 text-zinc-100 font-semibold leading-none tracking-tighter text-3xl md:text-4xl lg:text-5xl">
        Everything that matters to your{" "}
        <Highlighter className="z-40" color="#3f3f46">
          business
        </Highlighter>
      </span>
      
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative"
      >
          {workFeatures.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <ListItem label={item.label} description={item.description} icon={item.icon} />
            </motion.div>
          ))}
      </motion.div>

    </div>
  );
}
  