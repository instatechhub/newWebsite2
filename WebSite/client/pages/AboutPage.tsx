import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Award,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeader from "../components/PageHeader";
import TopPageHeader from "../components/TopPageHeader";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    document.title = "Innovate Outsource - About Us";

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: "20+",
      description: "Outsourcing Solutions",
    },
    {
      icon: Globe,
      label: "Cities Served",
      value: "5+",
      description: "Multiples Regions",
    },
    {
      icon: Clock,
      label: "Years in Operation",
      value: "1+",
      description: "Industry expertise",
    },
    {
      icon: Award,
      label: "Success Rate",
      value: "98.9%",
      description: "Project completion",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Experienced & Qualified Staff",
      description:
        "Our dedicated team of trained professionals delivers top-quality service, combining skill, efficiency, and a customer-first approach.",
      features: [
        "Industry-Certified Experts ",
        "Continuous Training ",
        "Proven Track Record ",
        "Reliable & Efficient ",
      ],
    },
    {
      icon: Star,
      title: "24/7 Customer Support",
      description:
        "We offer round-the-clock support, enabling seamless communication and quick resolution of customer queries at any time.",
      features: [
        "Instant Response Time ",
        "Multi-Channel Assistance",
        "Expert Support Team",
      ],
    },
    {
      icon: Users,
      title: "Foreign Language Support",
      description:
        "With multilingual experts, we help you connect with global customers and clients through clear and effective communication",
      features: [
        "Multilingual Experts ",
        "Cultural Understanding ",
        "Seamless Global Support ",
        "Improved Customer Experience",
      ],
    },
    {
      icon: CheckCircle,
      title: "Reliable & Secure Operations",
      description:
        "We prioritize the security and reliability of every interaction, ensuring data protection and uninterrupted service delivery.",
      features: [
        "Robust Data Security",
        "Consistent Service Quality",
        "Proactive Issue Resolution",
        "High Uptime Guarantee",
      ],
    },
  ];

  const timeline = [
    {
      year: "Hiring Process",
      title: "Talent Sourcing",
      description:
        "Finding and attracting skilled candidates from various sources.",
      milestone: "Step 1",
    },
    {
      year: "Hiring Process",
      title: "Screening & Shortlisting",
      description:
        "Reviewing applications and selecting the best candidates for the next stage.",
      milestone: "Step 2",
    },
    {
      year: "Hiring Process",
      title: "Assessment & Evaluation",
      description:
        "Testing skills, competencies, and cultural fit through assessments.",
      milestone: "Step 3",
    },
    {
      year: "Hiring Process",
      title: "Final Selection & Offer",
      description: "Choosing the right candidate and extending the job offer.",
      milestone: "Step 4",
    },
    {
      year: "Training & Development",
      title: "Onboarding",
      description:
        "Introducing new hires to company policies, culture, and tools.",
      milestone: "Step 5",
    },
    {
      year: "Training & Development",
      title: "Process Training",
      description:
        "Educating employees on workflows, procedures, and best practices.",
      milestone: "Step 6",
    },
    {
      year: "Training & Development",
      title: "Soft Skills Training",
      description:
        "Enhancing communication, teamwork, and problem-solving abilities.",
      milestone: "Step 7",
    },
    {
      year: "Training & Development",
      title: "Compliance & Quality Assurance",
      description:
        "Ensuring adherence to regulations and maintaining high quality standards.",
      milestone: "Step 8",
    },
    {
      year: "Training & Development",
      title: "Continuous Learning",
      description: "Promoting ongoing education and professional growth.",
      milestone: "Step 9",
    },
    {
      year: "Performance Monitoring & Support",
      title: "Tracking KPIs",
      description: "Monitoring key performance indicators to measure success.",
      milestone: "Step 10",
    },
    {
      year: "Performance Monitoring & Support",
      title: "Coaching & Feedback",
      description: "Providing guidance and constructive feedback to employees.",
      milestone: "Step 11",
    },
    {
      year: "Performance Monitoring & Support",
      title: "Career Growth Opportunities",
      description:
        "Creating pathways for professional advancement and promotions.",
      milestone: "Step 12",
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

    // Stats animation
    if (statsRef.current) {
      const statCards = statsRef.current.querySelectorAll(".stat-card");
      gsap.fromTo(
        statCards,
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
            toggleActions: "play none none reverse",
          },
        },
      );

      // Animate numbers
      const statNumbers = statsRef.current.querySelectorAll(".stat-number");
      statNumbers.forEach((element) => {
        const finalText = element.textContent || "";
        const numMatch = finalText.match(/[\d.]+/);
        if (numMatch) {
          const finalNumber = parseFloat(numMatch[0]);
          const hasPlus = finalText.includes("+");
          const hasPercent = finalText.includes("%");

          gsap.fromTo(
            element,
            { textContent: 0 },
            {
              textContent: finalNumber,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: hasPercent ? 0.1 : 1 },
              onUpdate: function () {
                const current = parseFloat(this.targets()[0].textContent);
                const suffix = hasPercent ? "%" : hasPlus ? "+" : "";
                element.textContent = `${hasPercent ? current.toFixed(1) : Math.round(current)}${suffix}`;
              },
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }

    // Values animation
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        valueCards,
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
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Timeline animation
    if (timelineRef.current) {
      const timelineItems =
        timelineRef.current.querySelectorAll(".timeline-item");
      gsap.fromTo(
        timelineItems,
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
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopPageHeader title="ABOUT US" breadcrumb={["Home", "About Us"]} />

      <PageHeader
        title="WE'RE TRANSFORMING BUSINESS OPERATIONS"
        subtitle="ABOUT US"
        description="We’re a fast-growing BPO partner helping businesses streamline operations and deliver better customer experiences. With a focus on quality, innovation, and results, we aim to make outsourcing simple, effective, and growth-driven."
        stats={[
          { value: "20+", label: "Team Members" },
          { value: "5+", label: "Cities" },
          { value: "5+", label: "Years in Operation" },
        ]}
      />

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

      <section ref={valuesRef} className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm shining-effect mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Call Center <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              InnovateOutsource delivers efficient, customized solutions for
              customer support, lead generation, and improving your business
              communication strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="glass-morphism rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-6 sm:space-y-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {value.description}
                        </p>
                        <ul className="space-y-2">
                          {value.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground"
                            >
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

      <section
        ref={timelineRef}
        className="py-24 bg-gradient-to-br from-card/30 to-background"
      >
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm shining-effect mb-4">
              GROWTH & SUCCESS PATH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">From Hiring to </span> Performance
              Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From attracting top talent to empowering them through training and
              continuous support, our structured process ensures lasting growth
              for both individuals and the organization.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="glass-morphism rounded-2xl p-6">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {item.milestone}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 shining-effect">
              Ready to Partner
              <span className="text-primary"> with Growth Experts?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join innovative startups and ambitious businesses that trust us to
              handle their most critical operations. Let’s discuss how we can
              help scale your vision to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform"
                onClick={() => navigate("/contact")}
              >
                Start Your Project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
              {/* <button className="border border-border text-foreground px-8 py-4 rounded-full hover:bg-card transition-colors">
                Schedule Consultation
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
