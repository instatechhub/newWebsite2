import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, HelpCircle, MessageCircle, Phone, Search } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TopPageHeader from '../components/TopPageHeader';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
  const faqs = [
    {
      id: 1,
      category: 'services',
      question: 'What BPO services do you offer?',
      answer: 'We provide comprehensive BPO solutions including call center services, technical support, data processing, telemarketing, back-office operations, and live chat support. Our services are available 24/7 across multiple time zones.',
      popular: true
    },
    {
      id: 2,
      category: 'services',
      question: 'Do you provide multilingual support?',
      answer: 'Yes, we offer support in 15+ languages including English, Spanish, French, German, Italian, Portuguese, Hindi, Mandarin, Japanese, and more. Our agents are native speakers with cultural expertise.',
      popular: true
    },
    {
      id: 3,
      category: 'pricing',
      question: 'How is your pricing structured?',
      answer: 'Our pricing is flexible and based on service type, volume, complexity, and duration. We offer per-hour, per-transaction, and fixed monthly pricing models. Contact us for a customized quote based on your specific requirements.',
      popular: true
    },
    {
      id: 4,
      category: 'services',
      question: 'What industries do you serve?',
      answer: 'We serve diverse industries including healthcare, finance, e-commerce, technology, telecommunications, retail, travel, real estate, and more. Our team has specialized expertise across different verticals.',
      popular: false
    },
    {
      id: 5,
      category: 'security',
      question: 'How do you ensure data security?',
      answer: 'We maintain the highest security standards with ISO 27001 certification, GDPR compliance, SOC 2 Type II certification, encrypted data transmission, secure infrastructure, and 24/7 security monitoring.',
      popular: true
    },
    {
      id: 6,
      category: 'support',
      question: 'What are your operating hours?',
      answer: 'We operate 24/7/365 with centers across multiple time zones. This ensures continuous coverage and support for your business regardless of your location or customer needs.',
      popular: false
    },
    {
      id: 7,
      category: 'pricing',
      question: 'Do you offer trial periods?',
      answer: 'Yes, we offer a 30-day trial period for new clients to evaluate our services. This includes full access to our capabilities with dedicated account management and performance reporting.',
      popular: false
    },
    {
      id: 8,
      category: 'services',
      question: 'Can you handle high-volume campaigns?',
      answer: 'Absolutely. We have the infrastructure and workforce to handle high-volume operations. Our largest campaigns have processed over 100,000 interactions per day with maintained quality standards.',
      popular: false
    },
    {
      id: 9,
      category: 'security',
      question: 'What compliance certifications do you have?',
      answer: 'We hold multiple certifications including ISO 27001 (Information Security), SOC 2 Type II, GDPR compliance, HIPAA compliance, and PCI DSS for payment processing. We undergo regular audits to maintain these standards.',
      popular: false
    },
    {
      id: 10,
      category: 'support',
      question: 'How do you ensure quality control?',
      answer: 'We implement Six Sigma processes, continuous monitoring, regular training, quality scorecards, customer feedback integration, and performance metrics tracking. Our quality assurance team conducts regular audits.',
      popular: false
    },
    {
      id: 11,
      category: 'pricing',
      question: 'Are there setup fees or hidden costs?',
      answer: 'Our pricing is transparent with no hidden fees. Setup costs vary based on complexity and customization requirements. We provide detailed pricing breakdowns before project commencement.',
      popular: false
    },
    {
      id: 12,
      category: 'services',
      question: 'Do you provide analytics and reporting?',
      answer: 'Yes, we provide comprehensive real-time dashboards, detailed analytics, performance reports, KPI tracking, and custom reporting based on your specific metrics and business requirements.',
      popular: true
    },
    {
      id: 13,
      category: 'support',
      question: 'How quickly can you scale operations?',
      answer: 'We can typically scale operations within 2-4 weeks depending on requirements. Our flexible infrastructure and trained agent pool allow for rapid scaling up or down based on your business needs.',
      popular: false
    },
    {
      id: 14,
      category: 'security',
      question: 'How do you handle confidential information?',
      answer: 'All staff sign comprehensive NDAs, access is role-based and monitored, data is encrypted at rest and in transit, we maintain audit trails, and follow strict data retention and disposal policies.',
      popular: false
    },
    {
      id: 15,
      category: 'pricing',
      question: 'What payment terms do you offer?',
      answer: 'We offer flexible payment terms including monthly billing, quarterly payments, and annual contracts with discounts. Payment methods include wire transfer, ACH, and major credit cards.',
      popular: false
    }
  ];

const FAQPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'services', label: 'Services', count: faqs.filter(faq => faq.category === 'services').length },
    { id: 'pricing', label: 'Pricing', count: faqs.filter(faq => faq.category === 'pricing').length },
    { id: 'support', label: 'Support', count: faqs.filter(faq => faq.category === 'support').length },
    { id: 'security', label: 'Security', count: faqs.filter(faq => faq.category === 'security').length },
  ];



  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: number) => {
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(id)) {
      newOpenAccordions.delete(id);
    } else {
      newOpenAccordions.add(id);
    }
    setOpenAccordions(newOpenAccordions);
  };

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

    // FAQ animation
    if (faqRef.current) {
      const faqItems = faqRef.current.querySelectorAll('.faq-item');
      gsap.fromTo(faqItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredFAQs]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Page Header */}
      <TopPageHeader
        title="FAQ"
        breadcrumb={['Home', 'FAQ']}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container-max section-padding">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Find answers to common questions about our BPO services, pricing, security,
              and more. Can't find what you're looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.label}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeCategory === category.id
                            ? 'bg-primary-foreground/20 text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Popular Questions */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Popular Questions</h4>
                  <div className="space-y-2">
                    {faqs.filter(faq => faq.popular).slice(0, 4).map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => {
                          setActiveCategory(faq.category);
                          setOpenAccordions(new Set([faq.id]));
                        }}
                        className="w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-card/50 rounded-lg"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordions */}
            <div ref={faqRef} className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  {activeCategory === 'all' ? 'All Questions' : categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <span className="text-muted-foreground">
                  {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={faq.id} className="faq-item">
                    <div className="glass-morphism rounded-2xl overflow-hidden border border-border/50">
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                      >
                        <div className="flex items-start space-x-4 flex-1">
                          {faq.popular && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              Popular
                            </span>
                          )}
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                            openAccordions.has(faq.id) ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openAccordions.has(faq.id) ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px bg-border/50 mb-4"></div>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our expert support team is available 24/7 to help you with any questions 
              about our BPO services, pricing, or implementation process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-morphism rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
                <button className="text-primary font-medium hover:underline">
                  +91 081205 45454
                </button>
              </div>

              <div className="glass-morphism rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-4">Get instant answers within 2 hours</p>
                <button className="text-primary font-medium hover:underline">
                  enquiry @Innovateoutsource.com
                </button>
              </div>

              <div className="glass-morphism rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Support Center</h3>
                <p className="text-muted-foreground mb-4">Browse our knowledge base</p>
                <button className="text-primary font-medium hover:underline"
                onClick={() => navigate('/contact')}
                >
                  Visit Center
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform"
               onClick={() => navigate('/contact')}
              >
                Contact Support
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

export default FAQPage;
