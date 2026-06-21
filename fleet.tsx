'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { fleet } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const bentoLayout = [
  'col-span-2 row-span-2 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem]',
  'col-span-1 row-span-1 min-h-[9rem] sm:min-h-[10.5rem] lg:min-h-[11rem]',
  'col-span-1 row-span-1 min-h-[9rem] sm:min-h-[10.5rem] lg:min-h-[11rem]',
  'col-span-1 row-span-1 min-h-[9rem] sm:min-h-[10.5rem] lg:min-h-[11rem]',
  'col-span-1 row-span-1 min-h-[9rem] sm:min-h-[10.5rem] lg:min-h-[11rem]',
  'col-span-2 md:col-span-4 row-span-1 min-h-[14rem] sm:min-h-[16rem] lg:min-h-[18rem]',
]

const defaultImageClass =
  'object-cover object-center saturate-[0.82] grayscale-[0.18] transition-all duration-700 ease-out group-hover:saturate-100 group-hover:grayscale-0 group-hover:scale-[1.04]'

function FleetCard({
  vehicle,
  sizes,
  tall,
}: {
  vehicle: (typeof fleet)[number]
  sizes: string
  tall?: boolean
}) {
  return (
    <motion.article
      className={`group relative w-full overflow-hidden rounded-2xl border border-border/80 bg-[#0c0c0c] ${tall ? 'h-full min-h-[inherit]' : 'min-h-[inherit]'}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={vehicle.image}
        alt={`${vehicle.name} — ${vehicle.category}`}
        fill
        className={vehicle.imageClass ?? defaultImageClass}
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
      <span className="absolute left-3 top-3 z-10 rounded-md border border-white/15 bg-black/45 px-2 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:px-2.5 sm:py-1 sm:text-[10px] md:text-[11px]">
        {vehicle.badge}
      </span>
      <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 md:p-5">
        <p className="font-heading text-[9px] font-medium uppercase tracking-[0.18em] text-primary/90 sm:text-[10px] md:text-xs">
          {vehicle.category}
        </p>
        <h3 className="mt-0.5 font-heading text-xs font-bold uppercase leading-tight tracking-wide text-white sm:text-sm md:text-base">
          {vehicle.name}
        </h3>
      </div>
    </motion.article>
  )
}

export function Fleet() {
  return (
    <section id="flotta" className="relative border-t border-border py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
            La nostra flotta
          </p>
          <h2 className="mt-2 text-balance font-heading text-2xl font-bold uppercase leading-tight sm:mt-3 sm:text-3xl md:text-5xl">
            Il mezzo giusto per ogni veicolo
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Pianali leggeri, autocarri con gru e mezzi di pronto intervento: scegliamo
            il carroattrezzi più adatto in base al tuo veicolo e alla situazione.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(11rem,auto))]">
          {fleet.map((vehicle, i) => (
            <Reveal
              key={vehicle.name}
              delay={(i % 4) * 0.06}
              className={bentoLayout[i]}
            >
              <FleetCard
                vehicle={vehicle}
                sizes={
                  i === 5
                    ? '(max-width: 768px) 100vw, 80vw'
                    : '(max-width: 640px) 50vw, 25vw'
                }
                tall={i === 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
