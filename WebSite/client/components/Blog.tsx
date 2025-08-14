import { ArrowUpRight } from "lucide-react";
import img1 from "../assests/blog-post-img-1.png";
import img2 from "../assests/blog-post-img-2.png";


const Blog = () => {
  const articles = [
    {
      id: 1,
      author: "BY - WPUSER1",
      date: "JANUARY 20, 2024",
      title: "InnovateOutsource launches AI-driven customer support system.",
      image:img1,
      link: "Read More",
    },
    {
      id: 2,
      author: "BY - WPUSER1",
      date: "JANUARY 20, 2024",
      title: "Partnership with a global e-commerce giant announced.",
      image:
       img2,
      link: "Read More",
    },
    {
      id: 3,
      author: "BY - WPUSER1",
      date: "JANUARY 20, 2024",
      title: "Expanding operations to 3 new international locations.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      link: "Read More",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-neutral-900/30">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR BLOGS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              LATEST <span className="text-primary">NEWS.</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground border border-border/50 rounded-full hover:bg-accent transition-colors">
              VIEW ALL
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl overflow-hidden bg-card/50 border border-border/20 hover:bg-card transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Read More Link */}
                <div className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  <span className="mr-2">{article.link}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
