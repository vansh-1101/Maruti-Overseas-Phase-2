import { useState, useEffect } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { generateWhatsAppLink } from '@/lib/utils';
import { submitFormToEmail } from '@/lib/emailService';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('leadPopupShown');
    if (hasShownPopup) {
      setHasShown(true);
      return;
    }

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        sessionStorage.setItem('leadPopupShown', 'true');
        setHasShown(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  // Handle exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        setIsOpen(true);
        sessionStorage.setItem('leadPopupShown', 'true');
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitFormToEmail({
      email,
      formType: 'lead-popup',
    });

    if (success) {
      setEmail('');
    }

    setIsSubmitting(false);
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919824372321';
    const message = 'Hi, I am interested in studying abroad. Can you please provide more information?';
    window.open(generateWhatsAppLink(phoneNumber, message), '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            Wait! Before You Go...
          </DialogTitle>
          <DialogDescription className="text-base">
            Get our FREE Study Abroad Guide - 50+ pages of expert advice on
            university selection, visa process, and scholarships.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <Download className="w-10 h-10 text-primary-600" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
            >
              <Download className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Download Free Guide'}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat on WhatsApp
          </Button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700"
          >
            No thanks, I'll browse first
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
