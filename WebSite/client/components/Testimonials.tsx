import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const testimonials = [
    {
      id: 1,
      category: "DESIGN QUALITY",
      quote:
        '"InnovateOutsource transformed our customer support process — now it’s faster, better, and more efficient!"',
      name: "Matthew R. Dubin",
      position: "Private Customer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      category: "DESIGN QUALITY",
      quote:
        '"Professional team with quick response times and excellent service delivery."',
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      avatar:
       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      category: "DESIGN QUALITY",
      quote:
        '"Their expertise in BPO operations is unmatched. Highly recommend!"',
      name: "Michael",
      position: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900/30 to-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              TRUSTED <span className="text-primary">BY CLIENTS.</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center group"
            >
              <ChevronRight className="h-5 w-5 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-8 rounded-2xl transition-all duration-300 ${
                index === currentTestimonial
                  ? "glass-morphism scale-105 border-primary/30"
                  : "glass-card glass-hover"
              }`}
            >
              {/* Category */}
              <span className="text-xs font-medium text-primary uppercase tracking-wide mb-4 block">
                {testimonial.category}
              </span>

              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8 md:hidden">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
