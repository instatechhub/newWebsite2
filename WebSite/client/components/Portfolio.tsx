import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assests/1.jpeg"
import img2 from "../assests/2.jpeg"
import img3 from "../assests/3.jpeg"


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      id: 1,
      categories: ["INBOUND", "OUTBOUND"],
      title: "Comprehensive Service Solutions",
      description:
        "From inbound and outbound call handling to email, chat, and social media support, we help you connect with customers across every channel.",
      image:img1,
    },
    {
      id: 2,
      categories: ["SUPPORT", "EXPERTS"],
      title: "Highly Skilled Professional Team",
      description:
        "We hire and train top talent to deliver unmatched service quality while fostering a professional and supportive work culture",
      image:img2,
    },
    {
      id: 3,
      categories: ["CULTURE", "GROWTH"],
      title: "Supportive and Growth Culture",
      description:
        "Our team thrives in an environment that encourages growth, values contributions, and supports career advancement at all levels.",
      image:img3,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background relative">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              WHY WE’RE {" "}
              <span className="text-primary">THE BEST</span>
            </h2>
          </div>

          <div className="hidden md:block">
            {/* <button className="glass-button inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground rounded-full">
              VIEW ALL
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button> */}
          </div>
        </div>

        {/* Portfolio Cards Vertical Stack */}
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="w-full mb-8"
              style={{
                height: "80vh",
                zIndex: projects.length - index,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 glass-morphism rounded-2xl overflow-hidden h-full shadow-2xl">
                {/* Left Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm">
                  {/* Categories */}
                  <div className="flex items-center space-x-3 mb-6">
                    {project.categories.map((category, categoryIndex) => (
                      <span
                        key={categoryIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  {/* Link */}
                  {/* <div className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group">
                    <span className="mr-2 underline decoration-primary/50 group-hover:decoration-primary transition-colors">
                      {project.link}
                    </span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div> */}
                </div>

                {/* Right Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-background/20 via-transparent to-card/20" />

                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
