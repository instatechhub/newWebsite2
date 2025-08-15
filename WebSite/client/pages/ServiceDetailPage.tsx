import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import TopPageHeader from "@/components/TopPageHeader";

import servicesData  from "../utills/servicesData";


const slugifyTitle = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .trim();

const ServiceDetailPage = () => {
  const { title } = useParams();

  // Find the matching service based on the slug
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
        <section className="relative py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl">
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
        <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container-max section-padding text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Grow Your Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let Insta Connects handle your inbound services while you focus on
              what matters most.
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
