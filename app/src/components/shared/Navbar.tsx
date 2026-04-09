import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { countries, services } from '@/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    {
      label: 'Study Destinations',
      href: '/study-abroad',
      dropdown: countries.map(c => ({
        label: `${c.flag} ${c.name}`,
        href: `/study-abroad/${c.slug}`,
      })),
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: services
        .filter(s => s.slug !== 'immigration')
        .slice(0, 6)
        .map(s => ({
          label: s.name,
          href: `/services/${s.slug}`,
        })),
    },
    { label: 'Courses', href: '/courses' },
    {
      label: 'Resources',
      href: '/resources',
      dropdown: [
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Tools', href: '/resources#tools' },
        { label: 'FAQ', href: '/resources#faq' },
      ],
    },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex-shrink-0 relative group cursor-pointer">
              <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-all duration-500 scale-110"></div>
              <img
                src="/images/logo.jpg"
                alt="Maruti Overseas Consultancy Logo"
                className="relative h-16 md:h-[72px] lg:h-[84px] w-16 md:w-[72px] lg:w-[84px] rounded-full object-cover shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-2 border-primary-300/20 bg-white transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
              />
            </div>
            <div className="hidden sm:block flex flex-col justify-center">
              <span className={cn(
                'font-display font-bold text-[19px] leading-snug block',
                isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
              )}>
                Maruti Overseas Consultancy
              </span>
              <span className={cn(
                "block text-[13px] font-medium italic mt-1",
                isScrolled || isMobileMenuOpen ? "text-primary-600" : "text-white/80"
              )}>
                Let's Make Career...
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div
                    className="relative flex items-center h-full"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        'flex items-center px-3 py-2 rounded-l-md text-sm font-medium transition-colors whitespace-nowrap',
                        isActive(link.href) || openDropdown === link.label
                          ? 'text-primary-600 bg-primary-50'
                          : isScrolled
                            ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      )}
                    >
                      {link.label}
                    </Link>
                    <button
                      className={cn(
                        'flex items-center px-1 py-2 rounded-r-md text-sm font-medium transition-colors h-full',
                        isActive(link.href) || openDropdown === link.label
                          ? 'text-primary-600 bg-primary-50'
                          : isScrolled
                            ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      )}
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      <ChevronDown className={cn("w-4 h-4", isScrolled ? "text-gray-500" : "text-white/70")} />
                    </button>

                    <DropdownMenu open={openDropdown === link.label} onOpenChange={(open) => {
                      if (!open) setOpenDropdown(null);
                    }}>
                      <DropdownMenuTrigger className="absolute inset-0 w-full h-full pointer-events-none opacity-0" />
                      <DropdownMenuContent align="start" className="w-48" sideOffset={0}>
                        {link.dropdown.map((item) => (
                          <DropdownMenuItem key={item.label} asChild>
                            <Link
                              to={item.href}
                              className="cursor-pointer"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      isActive(link.href)
                        ? 'text-primary-600 bg-primary-50'
                        : isScrolled
                          ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-primary-600"
                  : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
            <Button
              asChild
              className={cn(
                "transition-all",
                isScrolled
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white"
                  : "bg-white text-primary-700 hover:bg-gray-100"
              )}
            >
              <Link to="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Book Counseling
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isScrolled || isMobileMenuOpen
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (

                    <div className="space-y-1">
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md"
                      >
                        {link.label}
                        <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === link.label ? "rotate-180" : "")} />
                      </button>
                      {mobileExpanded === link.label && (
                        <div className="pl-4 space-y-1 animate-fade-in">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block px-3 py-3 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        'block px-3 py-3 rounded-md text-sm font-medium',
                        isActive(link.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                  }
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500"
              >
                <Link to="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Counseling
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
