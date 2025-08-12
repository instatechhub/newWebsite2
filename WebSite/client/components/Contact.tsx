import { Sparkle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900/30 to-background overflow-hidden relative">
      <div className="container-max section-padding">
        {/* Cross Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          {/* Horizontal moving crosses */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex items-center justify-center h-full animate-scroll-slow">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={`h-${index}`}
                  className="flex items-center space-x-32 whitespace-nowrap"
                >
                  <span className="text-4xl font-bold">
                    <Sparkle />
                  </span>
                  <span className="text-4xl font-bold">
                    <Sparkle />
                  </span>
                  <span className="text-4xl font-bold">
                    <Sparkle />
                  </span>
                  <span className="text-4xl font-bold">
                    <Sparkle />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagonal moving crosses */}
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12">
            <div className="flex items-center justify-center h-full animate-scroll-reverse">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={`d-${index}`}
                  className="flex items-center space-x-40 whitespace-nowrap"
                >
                  <span className="text-6xl font-bold">
                    <Sparkle />
                  </span>
                  <span className="text-6xl font-bold">
                    <Sparkle />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Text */}
        <div className="relative text-center z-10">
          {/* Background Text Animation */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="flex items-center space-x-16 animate-scroll-fast opacity-10">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-16 whitespace-nowrap"
                >
                  <span className="text-6xl md:text-8xl lg:text-9xl font-bold">
                    Get In
                  </span>
                  <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    <Sparkle size={40} />
                  </span>
                  <span className="text-6xl md:text-8xl lg:text-9xl font-bold">
                    Touch
                  </span>
                  <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    <Sparkle size={40} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="block text-primary">Get In Touch</span>
            </h2>
            <span className="block w-full text-foreground text-[20px] leading-[28px] break-words">
  Let’s work together to scale your business with our expert outsourcing solutions.
</span>
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12 relative z-20">
          <button className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/25">
            Let’s Make Progress
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
