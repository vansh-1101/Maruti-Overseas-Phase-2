import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { label: 'Study in UK', href: '/study-abroad/uk' },
    { label: 'Study in USA', href: '/study-abroad/usa' },
    { label: 'Study in Canada', href: '/study-abroad/canada' },
    { label: 'Study in Australia', href: '/study-abroad/australia' },
    { label: 'Student Visa', href: '/services/student-visa' },
    { label: 'Test Preparation', href: '/services/test-prep' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Testimonials', href: '/about/testimonials' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Contact', href: '/contact' },
  ];



  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">Maruti Overseas</span>
                <span className="block text-xs text-gray-400">Since 2004</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted partner for international education. 20+ years of excellence
              in helping students achieve their study abroad dreams.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/maruti.travels.3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/marutioverseasconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white">Ahmedabad Office</p>
                  <p>702, Shree Balaji Heights, Nr. IDBI Bank,</p>
                  <p>Off C.G. Road, Navrangpura, Ahmedabad-380006</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p className="font-medium text-white">Visnagar Office</p>
                  <p>277-278, Sona Complex, Kansa Road,</p>
                  <p>Visnagar - 384315</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <a href="tel:+919824372321" className="hover:text-white">+91 98243 72321</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <a href="mailto:visnagar.moc@gmail.com" className="hover:text-white">
                    visnagar.moc@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-1">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm">
                Get the latest updates on study abroad opportunities, scholarships, and visa tips.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 w-full md:w-64"
              />
              <Button className="bg-primary-600 hover:bg-primary-700 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Maruti Overseas Consultancy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
