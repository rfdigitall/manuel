import { MapPin, Navigation, Clock } from 'lucide-react'
import { company } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const zones = [
  'Varese città',
  'Gallarate',
  'Busto Arsizio',
  'Saronno',
  'Laghi (Maggiore · Ceresio)',
  'Malpensa MXP',
  'Como & Lecco',
  'Milano & hinterland',
  'Svizzera (Ticino)',
  'Tutta Europa',
]

export function Coverage() {
  return (
    <section id="zona" className="relative border-t border-border py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
              Zona di intervento
            </p>
            <h2 className="mt-2 text-balance font-heading text-2xl font-bold uppercase leading-tight sm:mt-3 sm:text-3xl md:text-5xl">
              Da Varese, ovunque tu sia
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              La nostra base è a Varese, ma interveniamo in tutta la provincia, in
              Lombardia e oltre confine. Dovunque ti trovi, organizziamo il recupero.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
              {zones.map((zone) => (
                <span
                  key={zone}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  <MapPin className="h-3 w-3 shrink-0 text-primary sm:h-3.5 sm:w-3.5" />
                  {zone}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4 sm:rounded-2xl sm:p-5">
                <Clock className="h-5 w-5 text-primary" />
                <p className="mt-2 font-heading text-sm font-semibold uppercase sm:mt-3 sm:text-lg">
                  Sempre svegli
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {company.hours}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 sm:rounded-2xl sm:p-5">
                <Navigation className="h-5 w-5 text-primary" />
                <p className="mt-2 font-heading text-sm font-semibold uppercase sm:mt-3 sm:text-lg">
                  Arriviamo da te
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Condividi la posizione al telefono: ti raggiungiamo nel più breve
                  tempo possibile.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="map-dark relative min-h-[12rem] overflow-hidden rounded-xl border border-border sm:min-h-[16rem] sm:rounded-2xl lg:min-h-full lg:h-full">
              <iframe
                title={`Mappa sede ${company.name} — ${company.address}`}
                src={company.mapsEmbed}
                className="h-full min-h-[12rem] w-full sm:min-h-[16rem]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 sm:rounded-2xl" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-3 sm:p-5">
                <p className="pointer-events-auto inline-flex items-center gap-2 text-xs font-medium sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {company.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
