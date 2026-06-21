'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { company } from '@/lib/site'
import { PulseCallButton } from '@/components/pulse-call-button'

const nav = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#flotta', label: 'La Flotta' },
  { href: '#lavori', label: 'Lavori' },
  { href: '#zona', label: 'Zona' },
  { href: '#contatti', label: 'Contatti' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-border md:h-11 md:w-11">
            <Image
              src="/images/logo.jpeg"
              alt="Logo Soccorso Stradale Manuel"
              fill
              className="object-cover"
              sizes="44px"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-bold uppercase tracking-wide md:text-base">
              Soccorso Stradale
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              Manuel · H24
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
        <PulseCallButton
          href={`tel:${company.phonePrimaryRaw}`}
          size="sm"
          showIcon={false}
          className="hidden sm:inline-flex"
        >
          {company.phonePrimary}
        </PulseCallButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-muted-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
