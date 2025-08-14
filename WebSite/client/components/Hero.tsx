import { useEffect, useRef } from "react";
import { Hand } from "lucide-react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import heroImg from "../assests/about-us.jpg";


const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate elements in sequence
    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, x: 50 },
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.8",
      );

    // Floating animation for decorative elements
    gsap.to(".floating-element", {
      y: "-=20",
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="flex items-center space-x-3">
              <Hand className="h-6 w-6 text-primary animate-wave" />
              <span className="text-lg text-muted-foreground">Welcome to</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-primary">Innovate</span> Outsource
              </h1>
              <h2
                ref={subtitleRef}
                className="text-2xl md:text-3xl font-semibold text-foreground"
              >
                Where Innovation Meets Outsourcing Excellence.
              </h2>
              <p
                ref={descriptionRef}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                We deliver smart, scalable BPO and call center solutions,
                helping businesses worldwide enhance efficiency, reduce costs,
                and provide exceptional customer experiences — powered by
                innovation, expertise, and 24/7 support.
              </p>
            </div>

            {/* CTA Button */}
            <div ref={ctaRef}>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 border border-primary/20"
              
                onClick={() => navigate("/contact")}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={heroImg}
                  alt="Oliver Jackson"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-primary to-red-500 rounded-full animate-bounce" />
              </div>

              {/* Contact Info Cards */}
              <div className="absolute -bottom-8 -left-8 glass-morphism rounded-lg p-4 min-w-[200px] glass-hover">
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      EMAIL :
                    </span>
                    <p className="text-sm font-medium">
                      enquiry@Innovateoutsource.com
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      PHONE :
                    </span>
                    <p className="text-sm font-medium">+91 081205 45454</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      ADDRESS :
                    </span>
                    <p className="text-sm font-medium">
                      301, Mangal City, Mall Vijay Nagar, Indore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="floating-element absolute top-20 left-10 w-2 h-2 bg-primary rounded-full hidden lg:block" />
      <div className="floating-element absolute bottom-20 right-20 w-3 h-3 bg-gradient-to-r from-primary to-red-500 rounded-full hidden lg:block" />
    </section>
  );
};

export default Hero;
