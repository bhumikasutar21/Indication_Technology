import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ai from "../assets/Ai.png";

const features = [
  // { title: "Domain-Driven Innovation" },
  // { title: "Scalable Automation" },
  // { title: "Continuous Learning" },
  // { title: "Hybrid Strength" },
  // { title: "Custom-Built Agents" },
  // { title: "End-to-End Partnership" },
  { title: "Task-Specific Intelligence" },
  { title: "Multi-Agent Collaboration" },
  { title: "AI Automation" },
  { title: "Architecture & Integration" },
  { title: "Managed AI Ops" },
  { title: "Custom AI Agents" },
];

const FeatureSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#f8e6f4] py-24 px-6 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Phone Image */}
        <motion.figure
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <img
            src={Ai}
            alt="Ai"
            className="max-w-full w-[700px] md:w-[600px] object-contain"
          />

          {/* Overlapping Text */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#732ce6] px-3 md:px-6 py-2 md:py-3 rounded-lg shadow-lg text-xs md:text-base max-w-[90%] md:max-w-md text-center font-bold text-white"
          >
            "Indication Technology develops intelligent AI solutions that
            deliver automation, innovation, and seamless performance across
            industries."
          </motion.div>
        </motion.figure>

        {/* Animated Text Section */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-gray-800"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Ai Services which we have Provided?
            {/* Why to choose Ai Services? */}
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="p-4 bg-white rounded-xl shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
