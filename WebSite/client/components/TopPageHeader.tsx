import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import backGraoundImage from '../assests/banner1.png';

interface TopPageHeaderProps {
  title: string;
  breadcrumb?: string[];
}

const TopPageHeader = ({ title, breadcrumb }: TopPageHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (headerRef.current) {
      const elements = headerRef.current.querySelectorAll('.animate-element');
      gsap.fromTo(elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
          clearProps: "all",
        }
      );
    }
  }, [location.pathname]);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Dark Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backGraoundImage}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-primary/10"></div>
          {/* Diagonal lines pattern */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5"
              style={{
                width: '150%',
                height: '1px',
                top: `${i * 12.5}%`,
                left: '-25%',
                transform: `rotate(-15deg)`,
                transformOrigin: 'center'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div ref={headerRef} className="text-center text-white w-full px-4">
          {breadcrumb && breadcrumb.length > 0 && (
            <div className="animate-element flex items-center justify-center space-x-2 text-sm text-white/70 mb-4">
              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <span className={index === breadcrumb.length - 1 ? 'text-primary' : ''}>
                    {item}
                  </span>
                </span>
              ))}
            </div>
          )}
          
          <h1 className="animate-element text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {title}
          </h1>
          
          {/* Decorative Line */}
          <div className="animate-element mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
            <div className="w-2 h-2 bg-primary rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPageHeader;
