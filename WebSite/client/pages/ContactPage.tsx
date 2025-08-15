import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Globe,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopPageHeader from "../components/TopPageHeader";
import officeImg from "../assests/banner3.png";
import axios from "axios";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    type:"enquiry",
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
const [isLoading, setIsLoading] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts",
      info: "+91 81205 45454",
      available: "24/7 Available",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message",
      info: "enquiry@Innovateoutsource.com",
      available: "Response within 2 hours",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office",
      info: "301, Mangal City Mall, Vijay Nagar Indore, Madhya Pradesh 452010",
      available: "Mon-Sat 9AM-7PM",
      color: "from-purple-500/20 to-purple-600/20",
    },
  ];

  const offices = [
    {
      city: "Indore",
      country: "INDIA",
      address:
        "301, Mangal City Mall, Vijay Nagar Indore, Madhya Pradesh 452010",
      phone: "+91 081205 45454",
      email: "enquiry@Innovateoutsource.com",
      timezone: "Asia/Kolkata",
      image: officeImg,
    },
  ];

  const services = [
    "Call Center Services",
    "Technical Support",
    "Data Processing",
    "Sales & Marketing",
    "Back Office Operations",
    "Chat Support",
    "Custom Solution",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post("https://app.instaconnects.com/api/v1/instaConnect/inovateEmailSend", formData);

    if (response.status === 200) {
      toast.success("Message sent successfully!");
      setFormData({
        type: "enquiry",
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message || "Failed to send message.");
  } finally {
    setIsLoading(false);
  }
};

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

    // Form animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Info animation
    if (infoRef.current) {
      const infoCards = infoRef.current.querySelectorAll(".info-card");
      gsap.fromTo(
        infoCards,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
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
      {/* Top Page Header */}
      <TopPageHeader title="Contact Us" breadcrumb={["Home", "Contact"]} />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container-max section-padding">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              LET'S START YOUR <span className="text-primary">BPO JOURNEY</span>{" "}
              TODAY
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Ready to transform your business operations? Our expert team is
              here to discuss your requirements and design a customized BPO
              solution that drives results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2hrs</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section ref={infoRef} className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Multiple Ways to <span className="text-primary">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our team
              is ready to assist you with any questions or requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="info-card text-center group cursor-pointer"
                >
                  <div className="glass-morphism rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <div className="text-lg font-semibold text-primary mb-2">
                      {method.info}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {method.available}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 2
                  hours during business hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="Your company"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="+91 12345 34567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                      
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-xl hover:scale-105 transition-transform"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending ": "Send Message"}

                    {isLoading ? <LoaderCircle className="ml-2 h-5 w-5 animate-spin" />: <Send className="ml-2 h-5 w-5" />}
                   
                    
                  </button>
                </form>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-6">Our Office</h3>
                <p className="text-muted-foreground mb-8">
                  We’ve evolved into a passionate team, delivering top-quality
                  BPO solutions to clients across multiple cities with a global
                  outlook.
                </p>
              </div>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="glass-morphism rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
                      <div className="relative h-32 md:h-auto">
                        <img
                          src={office.image}
                          alt={office.city}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-lg font-bold">{office.city}</div>
                          <div className="text-sm opacity-90">
                            {office.country}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="space-y-6">
                          <div className="flex items-start space-x-3">
                            <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {office.address}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {office.phone}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium break-all">
                              {office.email}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Timezone: {office.timezone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary"> Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the growing community of startups that trust us to streamline
              their operations and accelerate growth. Let’s explore how we can
              turn your ideas into success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform">
                Schedule Free Consultation
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button> */}
              <button className="border border-border text-foreground px-8 py-4 rounded-full hover:bg-card transition-colors">
                Download Company Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
