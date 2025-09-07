import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FooterFix from "@/components/FooterFix";
import Image from "../assets/AiServ.png";
import { motion } from "framer-motion";
import client1 from "../assets/TFox.webp";
import client2 from "../assets/leaderlogo.png";
import client3 from "../assets/barbera.jpg";
import client4 from "../assets/Client4.jpg";
import client5 from "../assets/client5.png";
import client6 from "../assets/gig.jpg";
import client7 from "../assets/Client6.png";

import ContactModal from "../pages/ContactModal";

import work1 from "../assets/Adobe Express - file (9).png";
import work2 from "../assets/Adobe Express - file (7).png";
import work3 from "../assets/Adobe Express - file (12).png";
// import work4 from "../assets/Adobe Express - file (11).png";
// import work5 from "../assets/Adobe Express - file (10).png";
// import work6 from "../assets/Adobe Express - file (1).png";

import lang1 from "../assets/programing.png";
import lang2 from "../assets/document.png";
import lang3 from "../assets/library.png";
import lang4 from "../assets/bootstrap.png";
import lang5 from "../assets/github.png";
import lang6 from "../assets/github (1).png";
import lang7 from "../assets/gitlab.png";
import lang8 from "../assets/nodejs.png";
import lang9 from "../assets/nodejs (1).png";
import lang10 from "../assets/django.png";

import lang11 from "../assets/python.png";
import lang12 from "../assets/php.png";
import lang13 from "../assets/bitbucket.png";
import lang14 from "../assets/wordpress.png";
import lang15 from "../assets/mysql.png";
import lang16 from "../assets/data-cleaning.png";
import lang17 from "../assets/database (1).png";
import lang18 from "../assets/database.png";
import lang19 from "../assets/social.png";
import lang20 from "../assets/drupal-logo.png";
// import lang21 from "../assets/shopify.png";

import plan from "../assets/B2.jpeg";

import Pro1 from "../assets/briefcase.png";
import Pro2 from "../assets/hospital.png";
import Pro3 from "../assets/ecommerce.png";
import Pro4 from "../assets/bank.png";
import Pro5 from "../assets/hr-manager.png";
import Pro6 from "../assets/agreement.png";

import FeatureWithAi from "../components/FeatureWithAi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Smartphone,
  Star,
  Heart,
  Users,
  MapPin,
  ShoppingCart,
  Camera,
  DollarSign,
  Clock,
  CheckCircle,
} from "lucide-react";
import appDevHero from "@/assets/app-dev-hero.jpg";

const AppDevelopment = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const appCategories = [
    {
      image: Pro1,
      title: "School Management AI Agent",
      description:
        "Our school management AI agent simplifies education workflows. From automating attendance and scheduling classes to offering personalized learning paths, it empowers educators and students to achieve better outcomes with less effort.",
    },
    {
      image: Pro2,
      title: "Hospital Management AI Agent",
      description:
        "Our hospital AI agent enhances patient care and operational efficiency. With intelligent triage, appointment scheduling, and proactive health monitoring, hospitals can deliver faster, safer, and more personalized healthcare experiences.",
    },
    {
      image: Pro3,
      title: "E-commerce AI Agent",
      description:
        "Our e-commerce AI agent transforms online shopping into a smart experience. With product recommendations, 24/7 customer support, and efficient order management, businesses can boost sales and keep customers engaged.",
    },
    {
      image: Pro4,
      title: "Banking & Finance AI Agent",
      description:
        "Our banking AI agent ensures smarter financial operations. From detecting fraud in real time to offering personalized financial advice and automating customer support, it helps institutions build trust and improve customer satisfaction.",
    },
    {
      image: Pro5,
      title: "HR & Recruitment AI Agent",
      description:
        "Our HR AI agent streamlines recruitment and employee management. With intelligent candidate screening, onboarding automation, and instant employee query handling, HR teams can save time and focus on building stronger workplaces.",
    },
    {
      image: Pro6,
      title: "Real Estate AI Agent",
      description:
        "Our real estate AI agent makes property management effortless. By offering virtual tours, handling tenant queries, and predicting maintenance needs, it helps agencies and property managers deliver a seamless real estate experience.",
    },
  ];

  const portfolioItems = [
    {
      image: work1,
    },
    {
      image: work2,
    },
    {
      image: work3,
    },
  ];

  const languages = [
    { name: "Frontend - Angular", logo: lang1 },
    { name: "Vue", logo: lang2 },
    { name: "React.js", logo: lang3 },
    { name: "Bootstrap Development", logo: lang4 },
    { name: "Version Control - Git", logo: lang5 },
    { name: "GitHub", logo: lang6 },
    { name: "GitLab", logo: lang7 },
    { name: "Backend - Node.js", logo: lang8 },
    { name: "Express.js", logo: lang9 },
    { name: "Django", logo: lang10 },

    { name: "Flask", logo: lang11 },
    { name: "PHP", logo: lang12 },
    { name: "BitBucket", logo: lang13 },
    { name: "CMS - Wordpress", logo: lang14 },
    { name: "Database - MySQL", logo: lang15 },
    { name: "Redis", logo: lang16 },
    { name: "MongoDB", logo: lang17 },
    { name: "PostgreSQL", logo: lang18 },
    { name: "Joomla", logo: lang19 },
    { name: "Drupal", logo: lang20 },

    // { name: "Shopify", logo: lang21 },
  ];

  const faqs = [
    {
      question: "What is your web development process?",
      answer:
        "Our web development process includes discovery and planning, design and prototyping, development and implementation, followed by testing, deployment, and ongoing support.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for building a website varies based on the complexity and requirements of the project. Typically, it can take anywhere from a few weeks to several months to complete.",
    },
    {
      question: "Do you provide responsive web design?",
      answer:
        "Yes, we specialize in creating responsive web designs that ensure your website looks and functions perfectly on all devices, including desktops, tablets, and smartphones.",
    },
    {
      question: "What types of websites do you develop?",
      answer:
        "We develop a variety of websites including business websites, e-commerce platforms, blogs, portfolio sites, and custom web applications tailored to meet specific business needs.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performs optimally at all times.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px", // adjust height as needed
        }}
      >
        <div className="relative z-10 text-white px-6">
          <p className="text-lg font-medium mb-4">--Our Core Services--</p>
          {/* <h1 className="text-4xl md:text-6xl font-bold">Ai Services</h1> */}
        </div>
      </section>

      {/* Features Section with Animation */}
      <FeatureWithAi />

      {/* Page Wrapper with 80% width */}
      <div className="w-[100%] mx-auto">
        {/* Portfolio Mobile Animation Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-8">
                Our <span className="gradient-text">Work</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Showcasing Our Expertise and Innovation Through Successful
                Projects and Satisfied Clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-glow transition-all duration-300 overflow-hidden group
                 w-[100%] mx-auto sm:max-w-sm md:max-w-sm"
                  // 90% width on mobile, xs on small screens, sm on medium+
                >
                  <CardContent className="p-0">
                    {/* Work Image */}
                    <div className="h-56 sm:h-64 md:h-80 relative overflow-hidden">
                      {/* smaller height on mobile */}
                      <img
                        src={item.image}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Ticker Section */}
        <div className="w-full  py-12 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            Our <span className="gradient-text">Clients</span>
          </h2>

          <motion.div
            className="flex gap-12 whitespace-nowrap items-center"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* <img src={client1} alt="Client 1" className="h-12 w-64" /> */}
            <img
              src={client2}
              alt="Client 2"
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={client3}
              alt="Client 3"
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={client4}
              alt="Client 4"
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={client5}
              alt="Client 5"
              className="h-10 w-64"
              loading="lazy"
            />
            <img
              src={client6}
              alt="Client 6"
              className="h-8 w-64"
              loading="lazy"
            />
            <img
              src={client7}
              alt="Client 7"
              className="h-10 w-64"
              loading="lazy"
            />

            {/* Duplicates */}
            {/* <img src={client1} alt="Client 1" className="h-10 w-64" /> */}
            <img
              src={client2}
              alt="Client 2"
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={client3}
              alt="Client 3"
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={client4}
              alt="Client 4"
              className="h-12 w-auto"
              loading="lazy"
            />
            <img
              src={client5}
              alt="Client 5"
              className="h-10 w-64"
              loading="lazy"
            />
            <img
              src={client6}
              alt="Client 6"
              className="h-8 w-64"
              loading="lazy"
            />
            <img
              src={client7}
              alt="Client 7"
              className="h-10 w-64"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Experience & Clients Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image with Experience Badge */}
            <div className="relative">
              <img
                src={plan}
                alt="Team working"
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-69 object-cover"
              />

              <motion.div
                className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md px-6 py-4 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }} // moves up 10px and back
                transition={{
                  duration: 4, // speed of one cycle
                  repeat: Infinity, // loop forever
                  ease: "easeInOut",
                }}
              >
                <div className="text-5xl font-bold text-brand-orange">7+</div>
                <p className="text-sm font-medium text-muted-foreground gradient-text">
                  Years of experience
                </p>
              </motion.div>
            </div>

            {/* Right Side: Content */}
            <div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-2 gradient-text">
                Business Planning
              </p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                Committed to Excellence: <br />
                <span className="gradient-text">
                  Professional and Dedicated Services
                </span>
              </h2>
              <p className="text-muted-foreground mb-6">
                With over 7 years of dedicated experience, we are enthusiastic
                about our work and the positive impact it brings to our clients.
                Throughout our journey, we have consistently delivered excellent
                solutions, aiming to exceed expectations and foster lasting
                relationships.
              </p>

              {/* Clients Box */}
              <div className="border border-border rounded-lg p-4 flex items-center gap-4 mb-4">
                <Users className="w-6 h-6 text-brand-purple" />
                <p className="font-semibold text-foreground">
                  54+ clients trusting us.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                We are committed to our timeline and how it{" "}
                <span className="underline">positively</span> impacts clients.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="animate-fade-in-up">
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  4.95
                </div>
                <p className="text-muted-foreground">100+ ratings</p>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  98%
                </div>
                <p className="text-muted-foreground">
                  Genuine client's positive feedback
                </p>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-6xl font-poppins font-bold gradient-text mb-4">
                  24/7
                </div>
                <p className="text-muted-foreground">Support Channel open</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Categories Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-8">
                Comprehensive Ai Automation <br />
                <span className="gradient-text">Services Tailored</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appCategories.map((category, index) => (
                <Card
                  key={index}
                  className="w-full border bg-card border-border hover:shadow-pink-500 transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Languages Section */}
        {/* <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
                Services <span className="gradient-text">we offer</span>
              </h2>
              <h3 className="text-2xl font-poppins font-semibold text-muted-foreground">
                Languages & Framework we support
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {languages.map((language, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105 w-full"
                >
                  <CardContent className="px-1 py-2 text-center flex flex-col items-center gap-1">
                    <img
                      src={language.logo}
                      alt={language.name}
                      className="h-8 w-8 object-contain"
                    />
                    <p className="font-medium text-foreground text-sm">
                      {language.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-8">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-poppins font-semibold text-foreground hover:no-underline hover:text-brand-purple">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}

        <section className="py-20 bg-gradient-hero mb-12 rounded-2xl">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-8">
              Ready to Build Your{" "}
              <span className="gradient-text">Ai Automation?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's transform your idea into a powerful Ai agents that users
              will love.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold px-8 py-6 text-lg"
              onClick={() => {
                setIsContactOpen(true);
              }}
            >
              Send a Message
            </Button>
          </div>
        </section>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <Footer />
      <FooterFix />
    </div>
  );
};

export default AppDevelopment;
