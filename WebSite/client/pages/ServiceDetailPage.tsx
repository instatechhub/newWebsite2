import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopPageHeader from "@/components/TopPageHeader";

import servicesData from "../utills/servicesData";

gsap.registerPlugin(ScrollTrigger);

const slugifyTitle = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .trim();

const ServiceDetailPage = () => {

  const { title } = useParams();
  document.title = `Innovate Outsource - ${title.replace(/-/g, " ")}`;

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);
  const ctaRef = useRef(null);

useEffect(() => {
  // Hero text animation
  gsap.fromTo(
    heroRef.current.querySelectorAll("h1, p"),
    { y: 60, opacity: 0, rotateX: 20 },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }
  );

  // Hero image parallax zoom-in effect
  gsap.fromTo(
    imageRef.current,
    { y: 80, opacity: 0, scale: 1.1 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Feature cards animation (fade + lift + rotateY)
  featuresRef.current.forEach((card, i) => {
    gsap.fromTo(
      card,
      { y: 70, opacity: 0, rotateY: -10 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // CTA section animation (scale bounce + fade)
  gsap.fromTo(
    ctaRef.current,
    { y: 60, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.6)",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}, [title]);



  // Find the matching service
  const service = servicesData.find(
    (srv) => slugifyTitle(srv.title) === title
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopPageHeader
        title={service.title}
        breadcrumb={["Services", service.title]}
      />

      <div>
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight shining-effect">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">
                {service.title.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {service.subtitle}
            </p>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              {service.description}
            </p>
          </div>
        </section>

        {/* Main Image */}
        <div className="container-max section-padding pb-24">
          <div
            ref={imageRef}
            className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Features */}
        <section className="py-10">
          <div className="container-max section-padding">
            <div className="flex flex-wrap gap-8">
              {service.features.map((feature, index) => {
                const IconComponent =
                  Icons[feature.icon] || Icons.CircleDot;
                return (
                  <div
                    key={index}
                    ref={(el) => (featuresRef.current[index] = el)}
                    className="flex-1 min-w-[300px] max-w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent size={28} />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-3">
                      <span className="text-primary">
                        {feature.title.split(" ")[0]}
                      </span>{" "}
                      {feature.title.split(" ").slice(1).join(" ")}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          ref={ctaRef}
          className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background"
        >
          <div className="container-max section-padding text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 shining-effect">
              Ready to <span className="text-primary">Grow Your Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let Innovate Outsource handle your inbound services while you
              focus on what matters most.
            </p>
            <Link
              to="/contact"
              className="glass-button inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-foreground rounded-full hover:scale-105 transition-transform"
            >
              Contact Us
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
