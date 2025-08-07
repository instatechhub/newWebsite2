import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({
  title,
  description = "This page is currently under construction. Check back soon for exciting updates!",
}: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-max section-padding text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gradient-from/20 to-gradient-to/20 flex items-center justify-center">
              <Construction className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Want us to prioritize this page? Let us know what you'd like to
              see here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-muted-foreground border border-border/50 rounded-lg hover:bg-accent transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-gradient-to-r from-gradient-from to-gradient-to rounded-lg hover:opacity-90 transition-opacity">
                Request This Page
              </button>
            </div>
          </div>

          {/* Features Preview */}
          <div className="pt-8 border-t border-border/20">
            <h3 className="text-lg font-semibold mb-4">
              Coming Soon Features:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center p-4 rounded-lg glass-card">
                <span>Interactive Content</span>
              </div>
              <div className="flex items-center justify-center p-4 rounded-lg glass-card">
                <span>Advanced Features</span>
              </div>
              <div className="flex items-center justify-center p-4 rounded-lg glass-card">
                <span>Enhanced User Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
