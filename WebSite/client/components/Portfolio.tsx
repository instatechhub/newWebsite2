import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      id: 1,
      categories: ["CALL CENTER", "CUSTOMER SUPPORT"],
      title: "Fortune 500 Customer Service",
      description:
        "Comprehensive customer support solution handling 10,000+ daily interactions with 98% satisfaction rate.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      link: "VIEW DETAILS",
    },
    {
      id: 2,
      categories: ["TECHNICAL SUPPORT", "HELPDESK"],
      title: "Global Tech Support Operations",
      description:
        "24/7 technical helpdesk services for multinational software company with multilingual support.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      link: "VIEW DETAILS",
    },
    {
      id: 3,
      categories: ["DATA PROCESSING", "BACK OFFICE"],
      title: "Healthcare Data Processing",
      description:
        "Secure data entry and processing for healthcare provider managing 1M+ patient records.",
       image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
      link: "VIEW DETAILS",
    },
    {
      id: 4,
      categories: ["TELEMARKETING", "SALES"],
      title: "E-commerce Sales Campaign",
      description:
        "High-converting outbound sales campaigns generating 300% ROI for online retail clients.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
      link: "VIEW DETAILS",
    },
  ];

  // useEffect(() => {
  //   const cards = cardsRef.current.filter(Boolean);

  //   if (!cards.length) return;

  //   // Clear any existing ScrollTriggers
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  //   // Set initial state - cards in column layout
  //   gsap.set(cards, {
  //     scale: 1,
  //     zIndex: (i) => cards.length - i,
  //     transformOrigin: "center center",
  //   });

  //   // Create stacking animation for each card
  //   cards.forEach((card, index) => {
  //     if (index < cards.length - 1) {
  //       ScrollTrigger.create({
  //         trigger: card,
  //         start: "top top",
  //         end: "bottom top",
  //         pin: false,
  //         pinSpacing: false,
  //         scrub: 1,
  //         onUpdate: (self) => {
  //           const nextCard = cards[index + 1];
  //           if (nextCard) {
  //             const progress = self.progress;

  //             // Next card slides up and has higher z-index
  //             gsap.set(nextCard, {
  //               y: -progress * window.innerHeight,
  //               zIndex: cards.length + index + 1, // Higher z-index than current card
  //             });

  //             // Current card scales down slightly when next card comes over
  //             gsap.set(card, {
  //               scale: 1 - progress * 0.05,
  //             });
  //           }
  //         },
  //       });
  //     }
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              SELECTED <span className="text-primary">WORKS.</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <button className="glass-button inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground rounded-full"
            >
              VIEW ALL
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
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
                  <div className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group">
                    <span className="mr-2 underline decoration-primary/50 group-hover:decoration-primary transition-colors">
                      {project.link}
                    </span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
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
