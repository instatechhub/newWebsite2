import { useEffect, useRef } from 'react';
import { ArrowUpRight, Clock, Globe, Headphones, Monitor, Shield, Users, Search, Target, Zap, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import TopPageHeader from '../components/TopPageHeader';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      icon: Headphones,
      title: 'Call Center Services',
      subtitle: 'Customer Support Excellence',
      description: 'Comprehensive inbound and outbound call center solutions with multilingual support, ensuring exceptional customer experiences across all touchpoints.',
      features: ['24/7 Customer Support', 'Multilingual Agents', 'Quality Assurance', 'Real-time Reporting'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      stats: { agents: '500+', languages: '15+', satisfaction: '98%' }
    },
    {
      id: 2,
      icon: Monitor,
      title: 'Technical Support',
      subtitle: 'Expert IT Solutions',
      description: 'Professional technical helpdesk services providing instant resolution for complex IT issues with certified technicians and advanced troubleshooting.',
      features: ['L1/L2/L3 Support', 'Remote Assistance', 'Ticket Management', 'SLA Compliance'],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      stats: { uptime: '99.9%', resolution: '15min', tickets: '10K+' }
    },
    {
      id: 3,
      icon: Shield,
      title: 'Data Processing',
      subtitle: 'Secure & Accurate',
      description: 'High-volume data entry, processing, and management services with stringent quality controls and security protocols for sensitive information.',
      features: ['Data Entry & Validation', 'Document Processing', 'Quality Control', 'Secure Infrastructure'],
     image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      stats: { accuracy: '99.8%', records: '1M+', security: 'ISO 27001' }
    },
    {
      id: 4,
      icon: Users,
      title: 'Sales & Marketing',
      subtitle: 'Revenue Generation',
      description: 'Strategic outbound sales campaigns, lead generation, and telemarketing services designed to maximize conversion rates and drive business growth.',
      features: ['Lead Generation', 'Appointment Setting', 'Sales Campaigns', 'CRM Integration'],
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop',
      stats: { conversion: '25%', leads: '50K+', roi: '300%' }
    },
    {
      id: 5,
      icon: Globe,
      title: 'Back Office Operations',
      subtitle: 'Operational Excellence',
      description: 'Comprehensive back-office support including finance & accounting, HR services, and administrative tasks to streamline your business operations.',
      features: ['Finance & Accounting', 'HR Services', 'Administrative Support', 'Process Optimization'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      stats: { efficiency: '40%', processes: '100+', cost: '60%' }
    },
    {
      id: 6,
      icon: Clock,
      title: 'Chat Support',
      subtitle: 'Real-time Assistance',
      description: 'Live chat support services with AI integration providing instant customer assistance and seamless escalation to human agents when needed.',
      features: ['Live Chat Support', 'AI Integration', 'Multi-channel Support', 'Instant Response'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      stats: { response: '30sec', satisfaction: '95%', chats: '25K+' }
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business requirements and develop a customized solution strategy.',
      icon: Search
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored BPO solution that aligns with your business goals.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment with minimal disruption to your existing operations.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance.',
      icon: TrendingUp
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

    // Services animation
    if (servicesRef.current) {
      const serviceCards = servicesRef.current.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }

    // Process animation
    if (processRef.current) {
      const processCards = processRef.current.querySelectorAll('.process-card');
      gsap.fromTo(processCards,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processRef.current,
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
        title="OUR SERVICES"
        breadcrumb={['Home', 'Services']}
      />

      {/* Page Header */}
      <PageHeader
        title="COMPREHENSIVE BPO SOLUTIONS"
        subtitle="OUR SERVICES"
        description="From customer support to data processing, we provide end-to-end business process outsourcing solutions that drive efficiency, reduce costs, and accelerate your business growth."
        stats={[
          { value: '500+', label: 'Clients Served' },
          { value: '15+', label: 'Years Experience' },
          { value: '99.8%', label: 'Success Rate' }
        ]}
      />

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="service-card group cursor-pointer">
                  <div className="glass-morphism rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Service Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Service Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-primary text-sm font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/20">
                        {Object.entries(service.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <div className="mt-6">
                        <button className="w-full glass-button inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Learn More
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We <span className="text-primary">Deliver Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures seamless implementation and exceptional results 
              for every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="process-card text-center">
                  <div className="glass-morphism rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-primary">Business Operations?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experts analyze your requirements and design a customized BPO solution 
              that drives efficiency and accelerates growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform">
                Get Custom Quote
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

export default ServicesPage;
