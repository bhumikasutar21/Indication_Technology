import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import "./HeroSection.css"; // Import your updated CSS

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animate-gradient-shift"></div>

        {/* Flowing Neon Circuits */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
          >
            <path
              d="M0,400 Q300,200 600,400 T1200,400"
              stroke="url(#circuit-gradient)"
              strokeWidth="2"
              fill="none"
              className="animate-circuit-flow"
            />
            <path
              d="M200,100 L400,100 L400,300 L800,300 L800,700"
              stroke="url(#circuit-gradient-2)"
              strokeWidth="1.5"
              fill="none"
              className="animate-circuit-flow-2"
            />
            <path
              d="M1000,200 L800,200 L800,500 L400,500 L400,600"
              stroke="url(#circuit-gradient-3)"
              strokeWidth="1.5"
              fill="none"
              className="animate-circuit-flow-3"
            />

            {/* Circuit nodes */}
            <circle
              cx="400"
              cy="100"
              r="4"
              fill="hsl(var(--brand-pink))"
              className="animate-pulse"
            >
              <animate
                attributeName="r"
                values="4;8;4"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="800"
              cy="300"
              r="4"
              fill="hsl(var(--brand-purple))"
              className="animate-pulse"
            >
              <animate
                attributeName="r"
                values="4;8;4"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx="400"
              cy="500"
              r="4"
              fill="hsl(var(--brand-blue))"
              className="animate-pulse"
            >
              <animate
                attributeName="r"
                values="4;8;4"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>

            <defs>
              <linearGradient
                id="circuit-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "hsl(var(--brand-pink))",
                    stopOpacity: 0.8,
                  }}
                />
                <stop
                  offset="50%"
                  style={{
                    stopColor: "hsl(var(--brand-purple))",
                    stopOpacity: 0.6,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "hsl(var(--brand-blue))",
                    stopOpacity: 0.4,
                  }}
                />
              </linearGradient>
              <linearGradient
                id="circuit-gradient-2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "hsl(var(--brand-purple))",
                    stopOpacity: 0.7,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "hsl(var(--brand-pink))",
                    stopOpacity: 0.5,
                  }}
                />
              </linearGradient>
              <linearGradient
                id="circuit-gradient-3"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "hsl(var(--brand-blue))",
                    stopOpacity: 0.7,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "hsl(var(--brand-purple))",
                    stopOpacity: 0.5,
                  }}
                />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-pink rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Rotating Glowing Sphere */}
        <div className="absolute top-20 right-20 w-40 h-40">
          <div className="w-full h-full relative animate-sphere-rotate">
            <div className="absolute inset-0 border border-brand-purple/40 rounded-full animate-pulse"></div>
            <div
              className="absolute inset-2 border border-brand-pink/30 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute inset-4 border border-brand-blue/20 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-brand-purple rounded-full animate-glow shadow-sphere-glow"></div>
            <div className="absolute inset-6 border border-brand-pink/50 rounded-full animate-orbit-ring"></div>
            <div className="absolute inset-8 border border-brand-blue/40 rounded-full animate-orbit-ring-reverse"></div>
          </div>
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Shaping Tomorrow
            <br />
            <span className="gradient-text">with Technology</span>
          </h1>
          <p className="hero-subtitle">
            {/* Leverage the capabilities of cutting-edge technology with Indication
            Technology. We specialize in exceptional web development, mobile app
            development, cloud computing solutions, AI development services, and
            much more. */}
            we harness the power of cutting-edge technology to deliver
            innovative solutions. Our expertise spans web development, mobile
            app development, cloud computing, AI-driven services, and more.
          </p>
          <Button onClick={scrollToContact} className="hero-button">
            Let's Talk - Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
