'use client'

import { MessageCircle } from 'lucide-react'
import { company } from '@/lib/site'
import { PulseCallButton } from '@/components/pulse-call-button'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl md:hidden">
      <div className="flex items-center gap-2.5">
        <PulseCallButton
          href={`tel:${company.phonePrimaryRaw}`}
          size="md"
          className="w-full flex-1 py-3.5"
        >
          Chiama Ora
        </PulseCallButton>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
