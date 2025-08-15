import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Clock,
  Globe,
  Headphones,
  Monitor,
  Shield,
  Users,
  Search,
  Target,
  Zap,
  TrendingUp,
  PhoneCall,
  MessageCircle,
  Mail,
  Share2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/PageHeader";
import TopPageHeader from "../components/TopPageHeader";
import { useNavigate } from "react-router-dom";
import coverImg from "../assests/Serrvices/1.jpg";
import coverImg1 from "../assests/Serrvices/2.jpg";
import coverImg2 from "../assests/Serrvices/3.jpg";
import coverImg3 from "../assests/Serrvices/4.jpg";
import coverImg4 from "../assests/Serrvices/5.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: Headphones,
    title: "Inbound Services",
    subtitle: "Seamless Customer Connections",
    description:
      "When customers contact your business, they expect quick,effective responses. At InnovateOutsource, we ensure every call turns into anopportunity for satisfaction and loyalty.",
    features: [
      "24/7 Availability",
      "Multilingual Support",
      "Order Processing",
      "Customer Assistance",
    ],
    image: coverImg,
    stats: { agents: "20+", languages: "3+", satisfaction: "98.6%" },
  },
  {
    id: 2,
    icon: PhoneCall,
    title: "Outbound Services",
    subtitle: "Customer Retention & Engagement",
    description:
      "At InnovateOutsource, we help businesses retain and engage customers through premium outbound call center solutions. Our team of experts is dedicated to delivering exceptional service that drives results.",
    features: [
      "Lead Generation",
      "Customer Retention",
      "Cold Calling",
      "Tailored Campaigns",
    ],
    image: coverImg1,
    stats: { agents: "15+", campaigns: "50+", satisfaction: "97.8%" },
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Chat Support Services",
    subtitle: "Real-Time Customer Engagement",
    description:
      "At InnovateOutsource, we enhance customer experiences through responsive and reliable chat support. Our chat services help businesses boost brand loyalty, encourage word-of-mouth promotion, and increase sales.",
    features: [
      "24/7 Live Chat",
      "Instant Query Resolution",
      "Multilingual Support",
      "Lead Conversion via Chat",
    ],
    image: coverImg4,
    stats: { agents: "50+", languages: "3+", satisfaction: "97%" },
  },

  {
    id: 4,
    icon: Mail,
    title: "E-Mail Support Solutions",
    subtitle: "Efficient & Professional Communication",
    description:
      "Outsourcing E-mail assistance from InnovateOutsource helps clients to cater to their customers with effective solutions thus strengthening the brand equity.",
    features: [
      "Timely Responses",
      "Personalized Communication",
      "Multilingual Email Support",
      "Issue Resolution via Email",
    ],
    image: coverImg3,
    stats: { agents: "8+", languages: "3+", satisfaction: "96%" },
  },

  {
    id: 5,
    icon: Share2,
    title: "Social Media Customer Support",
    subtitle: "Engaging & Responsive Brand Presence",
    description:
      "A brand can increase its reach over time with efficient use of resources on social platforms, thus building brand image. Social media management plays a big role in contributing to the success or decline of a brand.",
    features: [
      "24/7 Social Monitoring",
      "Quick Query Response",
      "Brand Image Management",
      "Multi-Platform Support",
    ],
    image: coverImg2,
    stats: { platforms: "5+", agents: "20+", satisfaction: "98.7%" },
  },
];

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your business requirements and develop a customized solution strategy.",
      icon: Search,
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Our experts design a tailored BPO solution that aligns with your business goals.",
      icon: Target,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Seamless deployment with minimal disruption to your existing operations.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "Continuous monitoring and optimization to ensure peak performance.",
      icon: TrendingUp,
    },
  ];

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
      );
    }

    // Services animation
    if (servicesRef.current) {
      const serviceCards =
        servicesRef.current.querySelectorAll(".service-card");
      serviceCards.forEach((card, index) => {
        gsap.fromTo(
          card,
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
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }

    // Process animation
    if (processRef.current) {
      const processCards = processRef.current.querySelectorAll(".process-card");
      gsap.fromTo(
        processCards,
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
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const slugifyTitle = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .trim();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Page Header */}
      <TopPageHeader title="OUR SERVICES" breadcrumb={["Home", "Services"]} />

      {/* Page Header */}
      <PageHeader
        title="ALL IN ONE BPO SOLUTIONS"
        subtitle="OUR SERVICES"
        description="From customer support to data processing, we deliver end-to-end outsourcing solutions that boost efficiency, cut costs, and support your growth journey."
        stats={[
          { value: "20+", label: "Clients Served" },
          { value: "5+", label: "Years in Operation" },
          { value: "98.9%", label: "Client Satisfaction Rate" },
        ]}
      />

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card group cursor-pointer"
                >
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
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {service.subtitle}
                        </p>
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
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/20">
                        {Object.entries(service.stats).map(
                          ([key, value], idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-primary">
                                {value}
                              </div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                                {key}
                              </div>
                            </div>
                          ),
                        )}
                      </div>

                      {/* Learn More Button */}
                      <div className="mt-6">
                        <button
                          className="w-full glass-button inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          onClick={() =>
                            navigate(`/services/${slugifyTitle(service.title)}`)
                          }
                        >
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
      <section
        ref={processRef}
        className="py-24 bg-gradient-to-br from-card/30 to-background"
      >
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We <span className="text-primary">Deliver Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures seamless implementation and
              exceptional results for every project we undertake.
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
                    <div className="text-4xl font-bold text-primary mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
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
              Ready to Transform Your{" "}
              <span className="text-primary">Business Operations?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experts analyze your requirements and design a customized
              BPO solution that drives efficiency and accelerates growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Get Custom Quote
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
