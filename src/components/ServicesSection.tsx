import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Smartphone,
  Brain,
} from "lucide-react";

import Image1 from "../assets/Service1.png";
import Image2 from "../assets/Service2.png";
import Image3 from "../assets/Service4.png";

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: "Web Development",
      description:
        "Our web development services encompass the full spectrum of building dynamic, responsive, and user-friendly websites. We focus on creating engaging digital experiences that help businesses establish a strong online presence and drive growth.",
      image: Image1,
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white" />,
      title: "Mobile App Development",
      description:
        "Indication Technology specializes in developing high-quality mobile applications for both iOS and Android platforms. We transform your ideas into functional, intuitive, and engaging mobile apps that enhance user engagement and satisfaction.",
      image: Image2,
    },
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "AI Services",
      description:
        "Indication Technology leverages artificial intelligence to drive innovation and efficiency, providing cutting-edge AI solutions tailored to business needs.",
      image: Image3,
    },
  ];

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate every 7s (only desktop)
  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, [current, isMobile]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  // Position logic (desktop = triangle loop)
  const getPosition = (index: number) => {
    if (index === current) return "center";
    if (index === (current + 1) % services.length) return "right";
    if (index === (current + 2) % services.length) return "left";
    return "hidden";
  };

  return (
    <section
      id="services"
      className="py-20 overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand-pink)_/_0.2),hsl(var(--brand-purple)_/_0.2),hsl(var(--brand-blue)_/_0.2))]"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-purple font-medium tracking-wide uppercase mb-4">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-12">
          Empowering Your{" "}
          <span className="gradient-text">Digital Evolution</span>
        </h2>

        {/* MOBILE VIEW (Stacked Cards) */}
        {isMobile ? (
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-purple/40 bg-black/50 text-left"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-brand-purple/80 rounded-xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* DESKTOP VIEW (Carousel with triangle loop) */
          <div className="relative flex justify-center items-center">
            <div className="relative flex w-full max-w-6xl h-[420px] items-center justify-center">
              {services.map((service, index) => {
                const pos = getPosition(index);
                if (pos === "hidden") return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-2xl overflow-hidden shadow-xl text-white flex flex-col justify-end"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    animate={
                      pos === "center"
                        ? {
                            opacity: 1,
                            scale: 1,
                            zIndex: 50,
                            x: 0,
                            width: "60%",
                            height: "100%",
                          }
                        : pos === "left"
                        ? {
                            opacity: 0.6,
                            scale: 0.85,
                            zIndex: 30,
                            x: "-65%",
                            width: "45%",
                            height: "80%",
                          }
                        : {
                            opacity: 0.6,
                            scale: 0.85,
                            zIndex: 30,
                            x: "65%",
                            width: "45%",
                            height: "80%",
                          }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 p-6 text-left">
                      <div className="w-14 h-14 flex items-center justify-center bg-brand-purple/80 rounded-xl mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-200">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-brand-purple p-3 rounded-full text-white hover:bg-brand-purple/80 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-brand-purple p-3 rounded-full text-white hover:bg-brand-purple/80 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
