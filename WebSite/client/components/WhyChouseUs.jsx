import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Headphones, LineChart, Globe2 } from "lucide-react";
import img from "../assests/whyImg.webp";


gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (!section || !content || !image) return;

    gsap.fromTo(
      content.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      },
    );

    gsap.fromTo(
      image,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container-max section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <div ref={contentRef} className="space-y-8">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm  shining-effect">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">

            Because Your <span className="text-primary"> Success Is Always</span> Our Top Priority
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At InnovateOutsource, we don’t just offer outsourcing we deliver
            growth. Our innovative solutions, dedicated teams, and secure
            processes help businesses operate smarter, serve customers better,
            and scale faster.
          </p>

          {/* Reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="text-primary w-8 h-8" />,
                title: "Expert Team",
                desc: "Skilled professionals dedicated to exceeding expectations.",
              },
              {
                icon: <Headphones className="text-primary w-8 h-8" />,
                title: "24/7 Support",
                desc: "Always available to assist you, no matter your timezone.",
              },
              {
                icon: <LineChart className="text-primary w-8 h-8" />,
                title: "Proven Growth",
                desc: "Data-driven strategies for consistent business success.",
              },
              {
                icon: <Globe2 className="text-primary w-8 h-8" />,
                title: "Global Reach",
                desc: "Serving clients across multiple countries and industries.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div
          ref={imageRef}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-100 h-100 lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <img
              src={img}
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Gradient Shapes */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
