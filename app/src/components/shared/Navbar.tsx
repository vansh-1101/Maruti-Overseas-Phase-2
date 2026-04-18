import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { countries, services } from '@/data';

const desktopNavItemClass =
  'inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold tracking-[0.01em] text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f2b15a]/40 hover:bg-white/[0.12] hover:text-white';

const desktopNavItemActiveClass =
  'border-[#f2b15a]/50 bg-gradient-to-r from-[#f2b15a]/22 to-[#ff8f3d]/18 text-white shadow-[0_10px_24px_rgba(8,15,34,0.24)]';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (label: string) => {
    // Cancel any pending close
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    // Delay close so mouse can travel to the dropdown panel
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const navLinks = [
    {
      label: 'Study Destinations',
      href: '/study-abroad',
      dropdown: countries.map((country) => ({
        label: country.name,
        countryCode: country.countryCode,
        href: `/study-abroad/${country.slug}`,
      })),
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: services
        .filter((service) => service.slug !== 'immigration')
        .slice(0, 6)
        .map((service) => ({ label: service.name, href: `/services/${service.slug}` })),
    },
    {
      label: 'Courses',
      href: '/courses',
      dropdown: [
        { label: 'IELTS Preparation', href: '/courses?filter=ielts' },
        { label: 'PTE Preparation', href: '/courses?filter=pte' },
        { label: 'French Language', href: '/courses?filter=french' },
        { label: 'German Language', href: '/courses?filter=german' },
        { label: 'GMAT Preparation', href: '/courses?filter=gmat' },
        { label: 'Duolingo English', href: '/courses?filter=duolingo' },
        { label: 'Spoken English', href: '/courses?filter=spoken' },
        { label: 'Skill Development', href: '/courses?filter=skill' },
        { label: 'Study Abroad Programs', href: '/courses?filter=abroad' },
      ],
    },
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
        'fixed left-0 right-0 top-0 z-[100] border-b border-white/10 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0b1730] py-2 shadow-[0_14px_38px_rgba(3,8,20,0.5)] backdrop-blur-xl'
          : 'bg-[#10203f]/95 py-3 backdrop-blur-md'
      )}
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-shrink-0 items-center" aria-label="Maruti Overseas - Home">
            <div
              className={cn(
                'flex items-center justify-center overflow-hidden rounded-2xl border border-white/75 bg-white shadow-[0_14px_30px_rgba(7,13,27,0.22)] transition-all duration-300',
                isScrolled ? 'h-[56px] w-[192px] px-0' : 'h-[62px] w-[206px] px-0'
              )}
            >
              <img
                src="/images/logo.jpg"
                alt="Maruti Overseas Consultancy"
                className="block h-[350%] w-auto max-w-none shrink-0 object-contain object-center"
                style={{ transform: 'translateX(-1.2%) translateY(5.5%)' }}
              />
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div
                    className="relative flex items-center"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        desktopNavItemClass,
                        'rounded-r-none pr-2',
                        (isActive(link.href) || openDropdown === link.label) && desktopNavItemActiveClass
                      )}
                    >
                      {link.label}
                    </Link>
                    <button
                      className={cn(
                        desktopNavItemClass,
                        'rounded-l-none border-l-0 px-3',
                        (isActive(link.href) || openDropdown === link.label) && desktopNavItemActiveClass
                      )}
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      aria-label={`Toggle ${link.label} dropdown`}
                    >
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          openDropdown === link.label && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Simple positioned dropdown — no Radix, no flicker */}
                    <div
                      className={cn(
                        'absolute left-0 top-full z-50 pt-2 transition-all duration-150',
                        openDropdown === link.label
                          ? 'pointer-events-auto translate-y-0 opacity-100'
                          : 'pointer-events-none -translate-y-1 opacity-0'
                      )}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-56 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {'countryCode' in item && item.countryCode ? (
                              <span
                                className={`fi fi-${item.countryCode} rounded-sm text-base`}
                                style={{ width: '1.25em', height: '1em', display: 'inline-block' }}
                              />
                            ) : null}
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      desktopNavItemClass,
                      isActive(link.href) && desktopNavItemActiveClass
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* ── CTA Buttons ── */}
          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/14 bg-[#142849] px-4 py-2.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f2b15a]/45 hover:bg-[#1a335c] hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#f2b15a]" />
              Contact Us
            </Link>
            <Button
              asChild
              size="lg"
              className="whitespace-nowrap rounded-full border-0 bg-gradient-to-r from-[#f2b15a] via-[#ef9f45] to-[#e07a2f] px-6 font-bold text-slate-950 shadow-[0_16px_30px_rgba(224,122,47,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#f5bd72] hover:via-[#f2ab4f] hover:to-[#e88a39] hover:shadow-[0_18px_34px_rgba(224,122,47,0.34)]"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book Counseling
              </Link>
            </Button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/12 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={cn(
            'overflow-y-auto transition-all duration-300 ease-in-out lg:hidden',
            isMobileMenuOpen ? 'mt-3 max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="rounded-2xl border border-white/10 bg-[#0b1730] pb-4 pt-4">
            <nav className="flex flex-col gap-2 px-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="flex min-h-[48px] w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            mobileExpanded === link.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          'overflow-hidden rounded-xl transition-all duration-300 mt-1',
                          mobileExpanded === link.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="bg-white rounded-xl py-2 shadow-lg border border-gray-100">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="flex min-h-[44px] items-center gap-2.5 px-4 py-2.5 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#00a896]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {'countryCode' in item && item.countryCode ? (
                              <span
                                className={`fi fi-${item.countryCode} rounded-sm`}
                                style={{ width: '1.25em', height: '1em', display: 'inline-block', flexShrink: 0 }}
                              />
                            ) : null}
                            {item.label}
                          </Link>
                        ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        'flex min-h-[48px] items-center rounded-2xl border px-4 py-3 text-[15px] font-semibold transition-colors',
                        isActive(link.href)
                          ? 'border-[#f2b15a]/40 bg-white/12 text-[#ffd29a]'
                          : 'border-white/10 bg-white/[0.06] text-white hover:bg-white/10'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 space-y-3 border-t border-white/10 px-3 pt-4">
              <Link
                to="/contact"
                className="flex min-h-[46px] items-center justify-center gap-2 rounded-2xl border border-white/14 bg-[#142849] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a335c]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4 text-[#f2b15a]" />
                Contact Us
              </Link>
              <Button
                asChild
                className="min-h-[46px] w-full rounded-2xl border-0 bg-gradient-to-r from-[#f2b15a] via-[#ef9f45] to-[#e07a2f] font-bold text-slate-950"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Free Counseling
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
