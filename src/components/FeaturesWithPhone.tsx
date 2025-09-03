import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Phone from "../assets/Phone.png";

const features = [
  { title: "Native and Cross-Platform Apps" },
  { title: "User-Centric UI/UX Design" },
  { title: "Performance Optimization" },
  { title: "App Store Submission and Launch" },
  { title: "Integration with Third-Party Services" },
  { title: "Post-Launch Support and Updates" },
];

const FeatureSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative bg-[#f8e6f4] py-16 px-4 md:py-24 md:px-6 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Phone Image */}
        <motion.figure
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <img
            src={Phone}
            alt="Phone"
            className="w-[260px] sm:w-[300px] md:w-[420px] object-contain"
          />

          {/* Overlapping Text */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 
                       bg-[#732ce6] px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl 
                       shadow-lg text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-sm 
                       text-center font-bold text-white"
          >
            "Indication Technology crafts high-quality iOS and Android apps that
            turn your ideas into intuitive, engaging experiences."
          </motion.div>
        </motion.figure>

        {/* Animated Text Section */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12 text-gray-800"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left"
          >
            Why Choose Our App Development?
          </motion.h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-center md:text-left">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
