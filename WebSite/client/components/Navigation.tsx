import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../hooks/use-theme";
import logo from "../assests/logo.png";
import logo2 from "../assests/logo2.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "SERVICES",
      href: "/services",
    },
    // {
    //   name: "PAGES",
    //   href: "#",
    //   dropdown: [
    //     { name: "Team", href: "/team" },
    //     { name: "FAQ", href: "/faq" },
    //   ],
    // },
    // {
    //   name: "BLOGS",
    //   href: "/blogs",
    // },
    { name: "ABOUT US", href: "/about" },

    {
      name: "CONTACT US",
      href: "/contact",
    },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "glass-nav",
      )}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={theme === "dark" ? logo : logo2}
              alt="Logo"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {/* {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    <div
                      className={cn(
                        "absolute top-8 left-0 min-w-[200px] rounded-lg transition-all duration-200 nav-dropdown-blur",
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-primary hover:bg-white/10 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : ( */}
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                {/* )} */}
              </div>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Let's contact
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:bg-muted transition-all duration-300 flex items-center justify-center group hover:scale-110"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              ) : (
                <Moon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {/* {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          activeDropdown === item.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : ( */}
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                {/* )} */}
              </div>
            ))}
            <div className="px-4 pt-2 space-y-3">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-card hover:bg-muted rounded-lg transition-colors"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 text-foreground" />
                    <span className="text-sm font-medium text-foreground">
                     Change Theme
                    </span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      Change Theme
                    </span>
                  </>
                )}
              </button>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Let's contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
