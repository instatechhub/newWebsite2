import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Award, Linkedin, Mail, MapPin, Twitter, Target, Handshake, Rocket, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TopPageHeader from '../components/TopPageHeader';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const departmentsRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('leadership');
  const navigate = useNavigate();

  const leadership = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      department: 'Executive',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 20+ years in BPO industry, driving innovation and global expansion.',
      experience: '20+ Years',
      location: 'New York, USA',
      specialties: ['Strategic Planning', 'Global Operations', 'Digital Transformation'],
      achievements: ['Scaled company to 500+ clients', 'Launched operations in 15 countries', 'Industry Excellence Award 2023'],
      social: { linkedin: '#', twitter: '#', email: 'sarah@webfoliobpo.com' }
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      department: 'Technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Technology innovator specializing in AI integration and automation solutions for BPO.',
      experience: '15+ Years',
      location: 'San Francisco, USA',
      specialties: ['AI & Automation', 'Cloud Infrastructure', 'Data Security'],
      achievements: ['Led digital transformation initiative', 'Implemented AI chat systems', 'Reduced processing time by 60%'],
      social: { linkedin: '#', twitter: '#', email: 'michael@webfoliobpo.com' }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Chief Operations Officer',
      department: 'Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Operations excellence expert ensuring quality delivery across all global service centers.',
      experience: '18+ Years',
      location: 'London, UK',
      specialties: ['Quality Management', 'Process Optimization', 'Team Leadership'],
      achievements: ['99.8% quality score achievement', 'Streamlined global operations', 'Led 1000+ agent teams'],
      social: { linkedin: '#', twitter: '#', email: 'emily@webfoliobpo.com' }
    }
  ];

  const departments = [
    {
      name: 'Customer Support',
      count: 150,
      lead: 'Jessica Williams',
      description: 'Multilingual support specialists providing 24/7 customer assistance.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
      skills: ['Multilingual Support', 'Conflict Resolution', 'CRM Systems', 'Quality Assurance']
    },
    {
      name: 'Technical Support',
      count: 85,
      lead: 'David Kumar',
      description: 'Certified technical experts resolving complex IT and software issues.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
      skills: ['Technical Troubleshooting', 'Remote Assistance', 'System Administration', 'Network Security']
    },
    {
      name: 'Data Processing',
      count: 120,
      lead: 'Maria Santos',
      description: 'Data specialists ensuring accuracy and security in all processing tasks.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
      skills: ['Data Entry', 'Quality Control', 'Database Management', 'Process Automation']
    },
    {
      name: 'Sales & Marketing',
      count: 95,
      lead: 'Robert Taylor',
      description: 'Sales professionals driving revenue growth through strategic campaigns.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop',
      skills: ['Lead Generation', 'Sales Conversion', 'CRM Management', 'Campaign Analytics']
    }
  ];

  const cultureValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every task, ensuring exceptional quality in all deliverables.'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Teamwork and open communication drive our success across all global operations.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to stay ahead of industry trends.'
    },
    {
      icon: Star,
      title: 'Growth',
      description: 'Continuous learning and development opportunities for every team member.'
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

    // Leadership animation
    if (leadershipRef.current) {
      const leaderCards = leadershipRef.current.querySelectorAll('.leader-card');
      gsap.fromTo(leaderCards,
        { y: 100, opacity: 0, rotationY: 45 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: leadershipRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Departments animation
    if (departmentsRef.current) {
      const deptCards = departmentsRef.current.querySelectorAll('.dept-card');
      gsap.fromTo(deptCards,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: departmentsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Culture animation
    if (cultureRef.current) {
      const cultureCards = cultureRef.current.querySelectorAll('.culture-card');
      gsap.fromTo(cultureCards,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cultureRef.current,
            start: "top 80%",
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
        title="TEAM"
        breadcrumb={['Home', 'Team']}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container-max section-padding">
          <div ref={heroRef} className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              MEET THE <span className="text-primary">EXPERTS</span> BEHIND OUR SUCCESS
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              Our diverse team of industry professionals brings together decades of experience,
              innovative thinking, and unwavering commitment to delivering exceptional BPO solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={leadershipRef} className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              LEADERSHIP
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visionary <span className="text-primary">Leaders</span> Driving Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our executive team combines strategic vision with deep industry expertise 
              to guide our company toward continued growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={leader.id} className="leader-card group">
                <div className="glass-morphism rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  {/* Image Section */}
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={leader.social.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a href={leader.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a href={`mailto:${leader.social.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                        <Mail className="h-5 w-5 text-white" />
                      </a>
                    </div>

                    {/* Basic Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-primary text-sm font-medium">{leader.position}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {leader.bio}
                    </p>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{leader.experience}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{leader.location}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {leader.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section ref={departmentsRef} className="py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              DEPARTMENTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Specialized <span className="text-primary">Teams</span> Across All Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each department brings unique expertise and dedication to deliver 
              exceptional results in their specialized service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="dept-card group">
                <div className="glass-morphism rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-start p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="bg-primary/90 px-3 py-1 rounded-full">{dept.count} Members</span>
                          <span>Led by {dept.lead}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">{dept.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Core Skills</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {dept.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section ref={cultureRef} className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              CULTURE & VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives <span className="text-primary">Our Team</span> Every Day
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape our culture and guide every decision we make, 
              creating an environment where both our team and clients thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="culture-card text-center">
                  <div className="glass-morphism rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-primary">World-Class</span> Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a global team that's shaping the future of business process outsourcing. 
              We offer competitive benefits, growth opportunities, and a collaborative work environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform">
                View Open Positions
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button> */}
              <button className="border border-border text-foreground px-8 py-4 rounded-full hover:bg-card transition-colors"
                onClick={() => navigate('/contact')} >
                Learn About Benefits
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
