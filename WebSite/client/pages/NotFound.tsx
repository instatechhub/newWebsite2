import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-max section-padding text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-[12rem] md:text-[16rem] font-bold gradient-text leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gradient-from/20 to-gradient-to/20 flex items-center justify-center">
                <Search className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or you may have entered an
              incorrect URL.
            </p>
            <div className="text-sm text-muted-foreground font-mono bg-accent/30 px-4 py-2 rounded-lg inline-block">
              {location.pathname}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-gradient-to-r from-gradient-from to-gradient-to rounded-lg hover:opacity-90 transition-opacity"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-muted-foreground border border-border/50 rounded-lg hover:bg-accent transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-border/20">
            <h3 className="text-lg font-semibold mb-4">
              You might be looking for:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="p-4 rounded-lg glass-card hover:bg-accent transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
