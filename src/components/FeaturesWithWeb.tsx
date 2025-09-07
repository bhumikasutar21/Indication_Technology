import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Web from "../assets/Adobe Express - file (13).png";

const features = [
  { title: "Custom Website Design" },
  { title: "Responsive and Mobile-Friendly Layouts" },
  { title: "E-commerce Solutions" },
  { title: "CMS Development (WordPress,etc.)" },
  { title: "SEO Optimization" },
  { title: "Ongoing Maintenance and Support" },
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
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Phone Image */}
        <motion.figure
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <img
            src={Web}
            alt="Web"
            loading="lazy"
            className="w-[100vw] md:w-[900px] object-contain"
          />

          {/* Overlapping Text */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 
               bg-[#732ce6] px-2 md:px-6 py-1.5 md:py-3 rounded-lg shadow-lg 
               text-[10px] sm:text-xs md:text-base 
               max-w-[90%] md:max-w-md text-center font-bold text-white"
          >
            "Indication Technology builds responsive, high-performance websites
            that deliver seamless user experiences across all devices."
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
            Why Choose Our Web Development?
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="p-3 bg-white rounded-xl shadow-md"
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
