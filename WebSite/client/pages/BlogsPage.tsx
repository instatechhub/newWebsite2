import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, Eye, Heart, Share2, Tag, User } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import TopPageHeader from '../components/TopPageHeader';

gsap.registerPlugin(ScrollTrigger);

const BlogsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', count: 12 },
    { id: 'industry', label: 'Industry Insights', count: 4 },
    { id: 'technology', label: 'Technology', count: 3 },
    { id: 'best-practices', label: 'Best Practices', count: 3 },
    { id: 'case-studies', label: 'Case Studies', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Customer Service: Transforming BPO Operations',
      excerpt: 'Explore how artificial intelligence is revolutionizing customer service operations and what it means for the future of business process outsourcing.',
      content: 'Full article content would go here...',
      category: 'technology',
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tags: ['AI', 'Customer Service', 'Technology', 'Automation'],
      views: 2845,
      likes: 127,
      featured: true
    },
    {
      id: 2,
      title: 'Building Resilient Call Center Operations: Lessons from Global Disruptions',
      excerpt: 'Learn how to create robust call center operations that can withstand global challenges and maintain service excellence.',
      content: 'Full article content would go here...',
      category: 'best-practices',
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-12',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      tags: ['Operations', 'Resilience', 'Management', 'Strategy'],
      views: 1923,
      likes: 89,
      featured: false
    },
    {
      id: 3,
      title: 'Data Security in BPO: Protecting Client Information in the Digital Age',
      excerpt: 'Comprehensive guide to maintaining the highest standards of data security and compliance in business process outsourcing.',
      content: 'Full article content would go here...',
      category: 'industry',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-10',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['Security', 'Compliance', 'Data Protection', 'Privacy'],
      views: 3156,
      likes: 198,
      featured: true
    },
    {
      id: 4,
      title: 'Case Study: 300% ROI Achievement Through Strategic BPO Partnership',
      excerpt: 'Discover how a Fortune 500 company achieved remarkable ROI through strategic partnership with our BPO services.',
      content: 'Full article content would go here...',
      category: 'case-studies',
      author: 'David Kumar',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-08',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tags: ['Case Study', 'ROI', 'Success Story', 'Partnership'],
      views: 2234,
      likes: 156,
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Omnichannel Customer Support: Integrating Multiple Touchpoints',
      excerpt: 'How to create seamless customer experiences across all communication channels in your BPO operations.',
      content: 'Full article content would go here...',
      category: 'best-practices',
      author: 'Maria Santos',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-05',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop',
      tags: ['Omnichannel', 'Customer Experience', 'Integration', 'Support'],
      views: 1789,
      likes: 103,
      featured: false
    },
    {
      id: 6,
      title: 'Remote Work Revolution: Managing Distributed BPO Teams Effectively',
      excerpt: 'Best practices for managing remote BPO teams while maintaining productivity and service quality.',
      content: 'Full article content would go here...',
      category: 'industry',
      author: 'Robert Taylor',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-03',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop',
      tags: ['Remote Work', 'Team Management', 'Productivity', 'Digital'],
      views: 2567,
      likes: 134,
      featured: false
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const latestPosts = blogPosts.slice(0, 3);

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

    // Posts animation
    if (postsRef.current) {
      const postCards = postsRef.current.querySelectorAll('.blog-card');
      gsap.fromTo(postCards,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: postsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredPosts]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Page Header */}
      <TopPageHeader
        title="BLOGS"
        breadcrumb={['Home', 'Blogs']}
      />

      {/* Page Header */}
      <PageHeader
        title="BPO BLOG & INSIGHTS"
        subtitle="INSIGHTS & RESOURCES"
        description="Stay updated with the latest trends, best practices, and insights from the world of business process outsourcing. Expert knowledge to help you succeed."
        stats={[
          { value: '50+', label: 'Articles Published' },
          { value: '10K+', label: 'Monthly Readers' },
          { value: '15+', label: 'Expert Authors' }
        ]}
      />

      {/* Featured Posts */}
      <section className="py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and impactful articles covering the latest trends 
              and insights in business process outsourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="blog-card group cursor-pointer">
                <div className="glass-morphism rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                        Featured
                      </span>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{post.author}</div>
                        <div className="flex items-center text-xs text-muted-foreground space-x-3">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary font-medium hover:underline flex items-center"
                      >
                        Read More
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                      <button className="p-2 hover:bg-muted rounded-full transition-colors">
                        <Share2 className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
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
                </div>

                {/* Latest Posts */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Latest Posts</h4>
                  <div className="space-y-4">
                    {latestPosts.map((post) => (
                      <div key={post.id} className="flex space-x-3 group cursor-pointer">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h5>
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(post.publishDate)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div ref={postsRef} className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  {activeCategory === 'all' ? 'All Posts' : categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <span className="text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="blog-card group cursor-pointer">
                    <div className="glass-morphism rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        
                        {/* Read Time */}
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-1 text-xs bg-black/50 text-white rounded-full backdrop-blur-sm">
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">{post.author}</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDate(post.publishDate)}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {post.views.toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              {post.likes}
                            </span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            Read More
                          </Link>
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

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with <span className="text-primary">Latest Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest BPO trends, best practices, 
              and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="glass-button inline-flex items-center justify-center px-6 py-3 font-medium text-foreground rounded-xl hover:scale-105 transition-transform">
                Subscribe
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
