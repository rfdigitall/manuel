'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Phone, Clock, MapPin } from 'lucide-react'
import { company } from '@/lib/site'
import { PulseCallButton } from '@/components/pulse-call-button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#080808]">
      {/* Mobil — neschimbat: fundal complet + overlay */}
      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden>
        <Image
          src="/images/hero-iveco-giallo.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-stretch">
        {/* Text */}
        <div className="relative z-10 flex flex-col justify-start px-4 pb-10 pt-20 md:px-6 md:pt-24 lg:justify-center lg:pb-16 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Pronto intervento · Varese
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance font-heading text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            Sei in panne?
            <span className="block text-primary">Ti riportiamo in strada.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg"
          >
            Soccorso stradale attivo <strong className="text-foreground">24 ore su 24</strong> a
            Varese e in tutta Europa. Auto, supercar e veicoli elettrici trasportati in
            totale sicurezza, da chi lo fa per mestiere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center"
          >
            <PulseCallButton
              href={`tel:${company.phonePrimaryRaw}`}
              className="w-full sm:w-auto"
            >
              Chiama Ora
            </PulseCallButton>
            <a
              href="#richiamo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-card sm:w-auto sm:text-base"
            >
              Vuoi essere richiamato?
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" /> Operativi 24/7
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" /> {company.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> {company.phoneSecondary}
            </span>
          </motion.div>
        </div>

        {/* Desktop — split dreapta, poziționare originală */}
        <div className="relative hidden lg:block lg:min-h-full">
          <div className="absolute inset-0 lg:inset-y-8 lg:right-0 lg:left-4">
            <Image
              src="/images/hero-iveco-giallo.jpeg"
              alt="Iveco Daily giallo — Soccorso Stradale Manuel H24"
              fill
              priority
              className="object-contain object-bottom lg:object-[center_85%]"
              sizes="50vw"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/55 to-transparent" />
        </div>
      </div>
    </section>
  )
}
