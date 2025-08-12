import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (!section || !image || !content || !stats) return;

    // Set initial state
    gsap.set([image, content.children], {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
    });

    // Simple scroll-triggered animation
    gsap.fromTo(
      image,
      { scale: 0.9, rotation: -3 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      content.children,
      { y: 30, opacity: 0.8 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Main Circular Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-red-500/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </div>

              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-full" />
              </div>

              <div className="absolute top-16 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <span className="text-primary font-medium uppercase tracking-wide text-sm">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                We're a{" "}
                <span className="text-primary">Leading BPO Company</span>{" "}
                providing comprehensive{" "}
                <span className="text-primary">Call Center Solutions</span> from
                global locations.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a proven track record in delivering outstanding results,
              InnovateOutsource specializes in call center operations, data
              management, and back-office services for businesses across
              industries. Our mission is to empower organizations with
              cost-effective, scalable, and high-quality outsourcing solutions.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="stat-number text-4xl md:text-5xl font-bold text-foreground">
                  99.8%
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Client Satisfaction Rate
                </div>
              </div>

              <div className="space-y-2">
                <div className="stat-number text-4xl md:text-5xl font-bold text-foreground">
                  100+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Successful Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Marquee */}
      <div className="mt-16 py-8 border-t border-b border-border/20 overflow-hidden">
        <div className="flex items-center space-x-16 animate-scroll">
          {[
            "Customer Support",
            "Technical Helpdesk",
            "Data Entry Services",
            "Telemarketing",
            "Back Office Operations",
            "Customer Support",
            "Technical Helpdesk",
            "Data Entry Services",
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 whitespace-nowrap"
            >
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground/30">
                {service}
              </span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
