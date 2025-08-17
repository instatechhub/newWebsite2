import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

const PageHeader = ({ title, subtitle, description, stats }: PageHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const elements = headerRef.current.querySelectorAll('.animate-element');
      gsap.fromTo(elements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Diagonal Lines Background - Matching Reference */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5"></div>
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
              style={{
                width: '200%',
                height: '2px',
                top: `${i * 10}%`,
                left: '-50%',
                transform: `rotate(-15deg)`,
                transformOrigin: 'center'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div ref={headerRef} className="text-center max-w-5xl mx-auto">
          {subtitle && (
              <span className="text-primary font-medium uppercase tracking-wide text-sm shining-effect">
              {subtitle}
            </span>
          )}
          
          <h1 className="animate-element text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            {title}
          </h1>
          
          {description && (
            <p className="animate-element text-xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              {description}
            </p>
          )}

          {stats && stats.length > 0 && (
            <div className="animate-element grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground uppercase tracking-wide text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
