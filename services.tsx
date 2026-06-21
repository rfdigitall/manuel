import { Truck, Globe2, BatteryCharging, Gem, Check } from 'lucide-react'
import { services, trustPoints } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const icons = [Truck, Globe2, BatteryCharging, Gem]

export function Services() {
  return (
    <section id="servizi" className="relative border-t border-border py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:rounded-2xl md:grid-cols-4">
          {trustPoints.map((t) => (
            <div key={t.value} className="bg-card px-3 py-4 text-center sm:px-5 sm:py-6">
              <div className="font-heading text-xl font-bold uppercase text-primary sm:text-2xl md:text-3xl">
                {t.value}
              </div>
              <p className="mt-1 text-[10px] leading-snug text-muted-foreground sm:text-xs">
                {t.label}
              </p>
            </div>
          ))}
        </div>

        <Reveal className="mt-10 max-w-2xl sm:mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
            I nostri servizi
          </p>
          <h2 className="mt-2 text-balance font-heading text-2xl font-bold uppercase leading-tight sm:mt-3 sm:text-3xl md:text-5xl">
            Un solo numero, ogni tipo di emergenza
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Dal guasto in città al rientro da un altro paese, gestiamo ogni
            situazione con mezzi adeguati e personale esperto. Niente improvvisazione.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <article className="group h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:rounded-2xl sm:p-6 md:p-8">
                  <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <h3 className="font-heading text-base font-semibold uppercase tracking-wide sm:text-xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
