import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Inbound Services",
      categories: ["INBOUND", "CALL CENTER"],
      description:
        "High-quality inbound call management ensuring seamless customer communication.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="8"
            y1="21"
            x2="16"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Outbound Services",
      categories: ["OUTBOUND", "CALL CENTER"],
      description:
        "Professional outbound calling to connect, engage, and grow your business.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="14,2 14,8 20,8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Chat Support Services",
      categories: ["B2B", "B2C"],
      description:
        "At InnovateOutsource, we deliver responsive, reliable chat support to boost customer loyalty.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-primary font-medium uppercase tracking-wide text-sm mb-4 block">
              OUR SPECIALISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              FEATURED <span className="text-primary">SERVICES.</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <button
              className="glass-button inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground rounded-full"
              onClick={() => navigate("/services")}
            >
              VIEW ALL
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl glass-morphism glass-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 text-primary">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Categories */}
              <div className="flex items-center space-x-3 mb-4">
                {service.categories.map((category, categoryIndex) => (
                  <span
                    key={categoryIndex}
                    className="px-3 py-1 text-xs font-medium bg-accent/50 text-muted-foreground rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow Icon */}
              <div className="flex justify-end"
                onClick={() => navigate("/services/" + service.title.toLowerCase().replace(/\s+/g, '-'))}
              >
                <div className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
