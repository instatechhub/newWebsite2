import { useEffect, useRef } from 'react';
import { ArrowUpRight, Award, Clock, Globe, Shield, Star, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import TopPageHeader from '../components/TopPageHeader';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+', description: 'Global enterprises trust us' },
    { icon: Globe, label: 'Countries Served', value: '25+', description: 'Worldwide operations' },
    { icon: Clock, label: 'Years Experience', value: '15+', description: 'Industry expertise' },
    { icon: Award, label: 'Success Rate', value: '99.8%', description: 'Project completion' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'We maintain the highest standards of data security and regulatory compliance across all operations.',
      features: ['ISO 27001 Certified', 'GDPR Compliant', 'SOC 2 Type II', '24/7 Security Monitoring']
    },
    {
      icon: Star,
      title: 'Quality Excellence',
      description: 'Our commitment to quality ensures exceptional results in every project we undertake.',
      features: ['Six Sigma Processes', 'Quality Assurance', 'Continuous Improvement', 'Performance Metrics']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience and domain expertise to your projects.',
      features: ['Certified Professionals', 'Multilingual Support', 'Industry Specialists', 'Continuous Training']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'With operations across multiple time zones, we provide round-the-clock service coverage.',
      features: ['24/7 Operations', 'Multiple Locations', 'Cultural Expertise', 'Local Knowledge']
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started as a small call center with 50 agents serving local businesses.',
      milestone: 'First 100 clients'
    },
    {
      year: '2012',
      title: 'Global Expansion',
      description: 'Expanded operations to serve international markets with multilingual support.',
      milestone: 'Opened 3 new centers'
    },
    {
      year: '2016',
      title: 'Technology Integration',
      description: 'Implemented AI and automation to enhance service delivery and efficiency.',
      milestone: 'Digital transformation'
    },
    {
      year: '2020',
      title: 'Remote Solutions',
      description: 'Launched work-from-home capabilities and cloud-based solutions.',
      milestone: 'Remote-first operations'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading BPO provider with 500+ global clients.',
      milestone: 'Market leadership'
    }
  ];

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      const statCards = statsRef.current.querySelectorAll('.stat-card');
      gsap.fromTo(statCards,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate numbers
      const statNumbers = statsRef.current.querySelectorAll('.stat-number');
      statNumbers.forEach((element) => {
        const finalText = element.textContent || '';
        const numMatch = finalText.match(/[\d.]+/);
        if (numMatch) {
          const finalNumber = parseFloat(numMatch[0]);
          const hasPlus = finalText.includes('+');
          const hasPercent = finalText.includes('%');

          gsap.fromTo(element,
            { textContent: 0 },
            {
              textContent: finalNumber,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: hasPercent ? 0.1 : 1 },
              onUpdate: function() {
                const current = parseFloat(this.targets()[0].textContent);
                const suffix = hasPercent ? '%' : hasPlus ? '+' : '';
                element.textContent = `${hasPercent ? current.toFixed(1) : Math.round(current)}${suffix}`;
              },
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }

    // Values animation
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll('.value-card');
      gsap.fromTo(valueCards,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Timeline animation
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      gsap.fromTo(timelineItems,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Page Header */}
      <TopPageHeader
        title="ABOUT US"
        breadcrumb={['Home', 'About Us']}
      />

      {/* Page Header */}
      <PageHeader
        title="WE'RE TRANSFORMING BUSINESS OPERATIONS"
        subtitle="ABOUT US"
        description="For over 15 years, we've been the trusted partner for businesses seeking exceptional BPO solutions. Our commitment to excellence, innovation, and client success has made us a global leader in the industry."
        stats={[
          { value: '500+', label: 'Team Members' },
          { value: '25+', label: 'Countries' },
          { value: '15+', label: 'Years Experience' }
        ]}
      />

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-card/30">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-card text-center group">
                  <div className="glass-morphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="stat-number text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Sets Us <span className="text-primary">Apart</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values drive everything we do, ensuring exceptional service delivery 
              and long-term partnerships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="glass-morphism rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground mb-6">{value.description}</p>
                        <ul className="space-y-2">
                          {value.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Milestones</span> of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the key moments 
              that shaped our journey to becoming a global BPO leader.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="glass-morphism rounded-2xl p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with <span className="text-primary">Industry Leaders?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 500+ global companies who trust us with their most critical business processes. 
              Let's discuss how we can help transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform">
                Start Your Project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-border text-foreground px-8 py-4 rounded-full hover:bg-card transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
