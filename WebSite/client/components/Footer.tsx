import {
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpeg";

const Footer = () => {
  const footerLinks = {
    "USEFUL LINKS": [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-t from-neutral-950 to-background">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="h-15 w-auto object-contain dark:invert transition-all duration-300"
              />
            </Link>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">CONTACT</h4>
            <div className="space-y-4">
              <div>
                <p className="text-foreground font-medium">
                  203, Mangal City Mall
                </p>
                <p className="text-foreground font-medium">
                  Vijay Nagar, Indore Madhya Pradesh – 452010, India
                </p>
              </div>
              <div>
                <p className="text-primary font-medium">
                  enquiry@Innovateoutsource.com
                </p>
                <p className="text-primary font-medium">+91 081205 45454 CALL</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">
              USEFUL LINKS
            </h4>
            <ul className="space-y-3">
              {footerLinks["USEFUL LINKS"].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">
              NEWSLETTER
            </h4>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 bg-accent/20 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary rounded-l-lg"
                />
                <button className="px-4 py-3 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="w-full border-t border-gray-600">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end">
                  <div className="flex gap-8 text-gray-400 text-xs">
                    <span className="cursor-pointer hover:text-white transition duration-300 whitespace-nowrap">
                      Privacy Policy
                    </span>
                    <span className="cursor-pointer hover:text-white transition duration-300 whitespace-nowrap">
                      Terms & Conditions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
