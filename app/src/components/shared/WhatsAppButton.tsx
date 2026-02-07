import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

const WhatsAppButton = () => {
  const phoneNumber = '919824372321';
  const message = 'Hi, I am interested in studying abroad. Can you please provide more information?';

  return (
    <a
      href={generateWhatsAppLink(phoneNumber, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
