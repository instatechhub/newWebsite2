import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Filter, Grid, List } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import TopPageHeader from '../components/TopPageHeader';

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      id: 1,
      categories: ['CALL CENTER', 'CUSTOMER SUPPORT'],
      title: 'Fortune 500 Customer Service',
      description: "Comprehensive customer support solution handling 10,000+ daily interactions with 98% satisfaction rate.",
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      client: 'Fortune 500 Company',
      year: '2024',
      duration: '6 months',
      stats: { satisfaction: '98%', interactions: '10,000+', agents: '150+' }
    },
    {
      id: 2,
      categories: ['TECHNICAL SUPPORT', 'HELPDESK'],
      title: 'Global Tech Support Operations',
      description: "24/7 technical helpdesk services for multinational software company with multilingual support.",
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      client: 'Tech Corporation',
      year: '2024',
      duration: '12 months',
      stats: { uptime: '99.9%', languages: '15+', tickets: '5,000+' }
    },
    {
      id: 3,
      categories: ['DATA PROCESSING', 'BACK OFFICE'],
      title: 'Healthcare Data Processing',
      description: "Secure data entry and processing for healthcare provider managing 1M+ patient records.",
     image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      client: 'Healthcare Network',
      year: '2023',
      duration: '18 months',
      stats: { accuracy: '99.8%', records: '1M+', compliance: '100%' }
    },
    {
      id: 4,
      categories: ['TELEMARKETING', 'SALES'],
      title: 'E-commerce Sales Campaign',
      description: "High-converting outbound sales campaigns generating 300% ROI for online retail clients.",
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop',
      client: 'E-commerce Platform',
      year: '2024',
      duration: '9 months',
      stats: { roi: '300%', conversion: '25%', calls: '50,000+' }
    },
    {
      id: 5,
      categories: ['CUSTOMER SUPPORT', 'CHAT SUPPORT'],
      title: 'Live Chat Support System',
      description: "Real-time chat support with AI integration for instant customer query resolution.",
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      client: 'SaaS Company',
      year: '2024',
      duration: '8 months',
      stats: { response: '30s', resolution: '85%', chats: '25,000+' }
    },
    {
      id: 6,
      categories: ['DATA ENTRY', 'BACK OFFICE'],
      title: 'Financial Data Management',
      description: "Secure financial data entry and reconciliation services for banking institutions.",
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      client: 'Banking Institution',
      year: '2023',
      duration: '24 months',
      stats: { accuracy: '99.9%', transactions: '1M+', security: '100%' }
    }
  ];

  const categories = ['ALL', 'CALL CENTER', 'TECHNICAL SUPPORT', 'DATA PROCESSING', 'TELEMARKETING', 'CUSTOMER SUPPORT', 'DATA ENTRY'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Filter animation
    if (filterRef.current) {
      gsap.fromTo(filterRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }

    // Grid animation
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.portfolio-card');
      gsap.fromTo(cards,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredProjects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    // Animate filter change
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.portfolio-card');
      gsap.to(cards, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
          gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out"
            }
          );
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Page Header */}
      <TopPageHeader
        title="PORTFOLIO"
        breadcrumb={['Home', 'Portfolio']}
      />

      {/* Page Header */}
      <PageHeader
        title="SELECTED WORKS."
        subtitle="OUR PORTFOLIO"
        description="Discover our exceptional BPO solutions that have transformed businesses across the globe. From call centers to data processing, we deliver excellence in every project."
        stats={[
          { value: '50+', label: 'Projects' },
          { value: '15+', label: 'Industries' },
          { value: '99%', label: 'Success Rate' }
        ]}
      />

      {/* Filter & View Controls */}
      <section className="py-16 border-b border-border/20">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Category Filters */}
            <div ref={filterRef} className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeFilter === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm">View:</span>
              <div className="flex items-center bg-card rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div 
            ref={gridRef}
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card group cursor-pointer"
              >
                <div className={`glass-morphism rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  viewMode === 'list' ? 'grid grid-cols-1 lg:grid-cols-2 gap-0' : ''
                }`}>
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.categories.slice(0, 2).map((category, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                      <span className="text-sm text-primary font-medium">{project.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Client */}
                    <div className="pt-4 border-t border-border/20">
                      <span className="text-sm text-muted-foreground">Client: {project.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-primary">Next Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our BPO solutions can transform your business operations and drive growth.
            </p>
            <button className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform">
              Get Started Today
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
