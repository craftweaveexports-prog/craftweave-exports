import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+91 8433177160';
  const message = encodeURIComponent('Hello CRAFTWEAVE EXPORTS I am interested in your textile products. Please share your catalog and wholesale pricing.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 whatsapp-float bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 group animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" fill="white" />
    </a>
  );
}