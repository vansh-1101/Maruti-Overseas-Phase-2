import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary-200">404</div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/contact">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/study-abroad"
                className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Study Destinations
              </Link>
              <Link
                to="/services"
                className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/courses"
                className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Course Finder
              </Link>
              <Link
                to="/resources/blog"
                className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
