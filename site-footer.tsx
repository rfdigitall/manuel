import Image from 'next/image'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { company } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer
      id="contatti"
      className="border-t border-border bg-card pb-28 pt-16 md:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-border">
                <Image
                  src="/images/logo.jpeg"
                  alt="Logo Soccorso Stradale Manuel"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold uppercase tracking-wide">
                  Soccorso Stradale Manuel
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-primary">
                  H24 · Varese
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Soccorso stradale e trasporto veicoli a Varese e in tutta Europa.
              Professionalità, mezzi adeguati e disponibilità 24 ore su 24.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contatti
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`tel:${company.phonePrimaryRaw}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {company.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneSecondaryRaw}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {company.phoneSecondary}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  Scrivici su WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Dove siamo
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={company.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {company.address}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {company.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Soccorso Stradale Manuel — Varese. Tutti i
            diritti riservati.
          </p>
          <p>Soccorso stradale · Carroattrezzi · Trasporto veicoli H24</p>
        </div>
      </div>
    </footer>
  )
}
