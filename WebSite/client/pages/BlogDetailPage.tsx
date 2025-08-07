import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Eye, Heart, Share2, Tag, User } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const BlogDetailPage = () => {
  const { id } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Mock blog data - in real app, fetch based on ID
  const blogPost = {
    id: 1,
    title: 'The Future of AI in Customer Service: Transforming BPO Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing customer service operations and what it means for the future of business process outsourcing.',
    content: `
      <p>Artificial Intelligence is fundamentally reshaping the landscape of customer service and business process outsourcing. As we stand at the threshold of a new era, organizations worldwide are discovering how AI technologies can enhance their operational efficiency while maintaining the human touch that customers value.</p>
      
      <h2>The Current State of AI in BPO</h2>
      <p>Today's BPO industry is experiencing unprecedented transformation through AI integration. From chatbots handling initial customer inquiries to sophisticated machine learning algorithms that predict customer behavior, AI is becoming an indispensable tool for modern service delivery.</p>
      
      <p>The adoption of AI in customer service has grown by over 300% in the past three years, with companies reporting significant improvements in response times, customer satisfaction, and operational costs. This growth trajectory shows no signs of slowing down.</p>
      
      <h2>Key AI Technologies Transforming BPO</h2>
      <p>Several AI technologies are leading this transformation:</p>
      
      <h3>Natural Language Processing (NLP)</h3>
      <p>NLP enables systems to understand and respond to customer queries in natural language, making interactions more intuitive and efficient. Advanced NLP systems can now handle complex queries that previously required human intervention.</p>
      
      <h3>Machine Learning and Predictive Analytics</h3>
      <p>These technologies help predict customer needs, identify potential issues before they escalate, and optimize resource allocation based on historical patterns and real-time data.</p>
      
      <h3>Robotic Process Automation (RPA)</h3>
      <p>RPA streamlines repetitive tasks, allowing human agents to focus on more complex, value-added activities that require emotional intelligence and creative problem-solving.</p>
      
      <h2>Benefits of AI Integration</h2>
      <p>The integration of AI in BPO operations offers numerous advantages:</p>
      
      <ul>
        <li><strong>24/7 Availability:</strong> AI-powered systems can provide round-the-clock support without breaks or downtime.</li>
        <li><strong>Consistent Service Quality:</strong> AI ensures consistent responses and adherence to service standards.</li>
        <li><strong>Scalability:</strong> AI systems can handle volume spikes without proportional increases in staffing.</li>
        <li><strong>Cost Efficiency:</strong> Reduced operational costs through automation of routine tasks.</li>
      </ul>
      
      <h2>Challenges and Considerations</h2>
      <p>While AI offers tremendous benefits, organizations must navigate several challenges:</p>
      
      <p>Data privacy and security remain paramount concerns. As AI systems process vast amounts of customer data, ensuring compliance with regulations like GDPR and maintaining customer trust is crucial.</p>
      
      <p>The human element remains irreplaceable for complex emotional situations. Successful AI implementation requires finding the right balance between automation and human interaction.</p>
      
      <h2>Future Outlook</h2>
      <p>The future of AI in BPO looks promising. Emerging technologies like emotional AI, which can detect and respond to customer emotions, and advanced conversational AI that can handle increasingly complex interactions, will further enhance service capabilities.</p>
      
      <p>We predict that by 2030, AI will handle approximately 80% of routine customer service interactions, while human agents focus on high-value, relationship-building activities.</p>
      
      <h2>Conclusion</h2>
      <p>The integration of AI in customer service and BPO operations is not just a trend—it's a fundamental shift that's here to stay. Organizations that embrace this transformation while maintaining focus on customer experience and human values will lead the industry into its next chapter.</p>
      
      <p>As we continue to innovate and adapt, the synergy between AI efficiency and human empathy will define the future of exceptional customer service.</p>
    `,
    category: 'technology',
    author: 'Sarah Johnson',
    authorBio: 'Sarah is our Chief Technology Officer with 15+ years of experience in AI and automation solutions for BPO operations.',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    publishDate: '2024-02-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    tags: ['AI', 'Customer Service', 'Technology', 'Automation', 'BPO', 'Future Trends'],
    views: 2845,
    likes: 127,
    shares: 45
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Building Resilient Call Center Operations',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop',
      readTime: '6 min read',
      publishDate: '2024-02-12'
    },
    {
      id: 3,
      title: 'Data Security in BPO: Best Practices',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop',
      readTime: '10 min read',
      publishDate: '2024-02-10'
    },
    {
      id: 4,
      title: 'Remote Work Revolution in BPO',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop',
      readTime: '7 min read',
      publishDate: '2024-02-08'
    }
  ];

  const recentPosts = [
    { id: 5, title: 'Omnichannel Customer Support Strategies', publishDate: '2024-02-20' },
    { id: 6, title: 'Quality Assurance in Modern BPO', publishDate: '2024-02-18' },
    { id: 7, title: 'Cost Optimization Through Automation', publishDate: '2024-02-16' },
    { id: 8, title: 'Training Programs for BPO Excellence', publishDate: '2024-02-14' }
  ];

  const categories = [
    { name: 'Technology', count: 12 },
    { name: 'Best Practices', count: 8 },
    { name: 'Industry Insights', count: 15 },
    { name: 'Case Studies', count: 6 },
    { name: 'Automation', count: 9 }
  ];

  useEffect(() => {
    // Content animation
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('p, h2, h3, ul, blockquote');
      gsap.fromTo(elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Sidebar animation
    if (sidebarRef.current) {
      const sidebarElements = sidebarRef.current.querySelectorAll('.sidebar-item');
      gsap.fromTo(sidebarElements,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sidebarRef.current,
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
      {/* Page Header */}
      <PageHeader
        title="BLOG INSIGHTS"
        subtitle="EXPERT KNOWLEDGE"
        description="In-depth analysis and insights from industry experts"
      />

      {/* Back Navigation */}
      <section className="py-8 border-b border-border/20">
        <div className="container-max section-padding">
          <Link 
            to="/blogs"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <div className="mb-12">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {blogPost.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  {blogPost.title}
                </h1>

                {/* Author & Meta Info */}
                <div className="flex items-center justify-between mb-8 p-6 glass-morphism rounded-2xl">
                  <div className="flex items-center space-x-4">
                    <img
                      src={blogPost.authorImage}
                      alt={blogPost.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-lg">{blogPost.author}</div>
                      <div className="text-muted-foreground text-sm">{blogPost.authorBio}</div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-2">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(blogPost.publishDate)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {blogPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-2" />
                      {blogPost.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      {blogPost.likes}
                    </span>
                    <button className="flex items-center hover:text-primary transition-colors">
                      <Share2 className="h-4 w-4 mr-2" />
                      {blogPost.shares}
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div 
                ref={contentRef}
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Share Section */}
              <div className="mt-16 p-8 glass-morphism rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    LinkedIn
                  </button>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="sidebar-item glass-morphism rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/blogs?category=${category.name.toLowerCase()}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <span className="text-sm group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="sidebar-item glass-morphism rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(post.publishDate)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                <div className="sidebar-item glass-morphism rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <div className="flex items-center text-xs text-muted-foreground space-x-2">
                              <span>{post.readTime}</span>
                              <span>•</span>
                              <span>{formatDate(post.publishDate)}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="sidebar-item glass-morphism rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest BPO insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button className="w-full glass-button py-2 text-sm font-medium rounded-lg hover:scale-105 transition-transform">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore More <span className="text-primary">Insights</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover more expert insights and industry trends in our comprehensive blog collection.
            </p>
            <Link
              to="/blogs"
              className="glass-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform"
            >
              View All Articles
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
