import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { generateWhatsAppLink } from '@/lib/utils';
import { submitFormToEmail } from '@/lib/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitFormToEmail({
      ...formData,
      formType: 'contact',
    });

    if (success) {
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }

    setIsSubmitting(false);
  };

  const whatsappLink = generateWhatsAppLink(
    '919824372321',
    'Hi, I am interested in studying abroad. Can you please provide more information?'
  );

  const offices = [
    {
      name: 'Ahmedabad Office',
      address: '702, Shree Balaji Heights, Swagat Cross RD, Chimanlal Girdharlal Rd, Ahmedabad, Gujarat 380006',
      phone: '+91-79-40030637',
      mobile: '+91-98243 72321',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=702+Shree+Balaji+Heights+Swagat+Cross+RD+Chimanlal+Girdharlal+Rd+Ahmedabad+Gujarat+380006',
    },
    {
      name: 'Visnagar Office (Head Office)',
      address: '277-278, Sona Complex, Kansa Road, Visnagar - 384315',
      phone: '+91-2765-222020',
      mobile: '+91-95743 90091',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=277-278+Sona+Complex+Kansa+Road+Visnagar+384315',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-main.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Have questions about studying abroad? We're here to help.
              Reach out to us and our experts will guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Speak directly with our counselors
              </p>
              <a href="tel:+919824372321" className="text-primary-600 font-medium">
                +91 98243 72321
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Send us your queries anytime
              </p>
              <a href="mailto:visnagar.moc@gmail.com" className="text-secondary-600 font-medium">
                visnagar.moc@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-3">
                Chat with us on WhatsApp
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student-visa">Student Visa</SelectItem>
                        <SelectItem value="tourist-visa">Tourist Visa</SelectItem>
                        <SelectItem value="immigration">Immigration</SelectItem>
                        <SelectItem value="test-prep">Test Preparation</SelectItem>
                        <SelectItem value="scholarships">Scholarships</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your study abroad goals..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Our Offices
              </h2>

              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <a
                        href={office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 hover:underline cursor-pointer transition-colors"
                      >
                        {office.address}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-primary-600">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href={`tel:${office.mobile}`} className="text-gray-600 hover:text-primary-600">
                        {office.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Working Hours</h3>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="text-gray-700">Monday - Saturday</p>
                    <p className="text-gray-600">10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=MARUTI+OVERSEAS+CONSULTANCY,702+Shree+Balaji+Heights,Swagat+Cross+RD,Chimanlal+Girdharlal+Rd,Ahmedabad,Gujarat+380006&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maruti Overseas Consultancy - Ahmedabad Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
