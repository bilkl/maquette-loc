"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, isWhatsAppEnabled } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  if (!isWhatsAppEnabled()) return null;

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contacter ${siteConfig.name} sur WhatsApp`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
