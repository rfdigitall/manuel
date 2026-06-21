'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { portfolio, type PortfolioSize } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const sizeHeights: Record<PortfolioSize, string> = {
  sm: 'min-h-[11rem] sm:min-h-[13rem]',
  md: 'min-h-[14rem] sm:min-h-[16rem]',
  lg: 'min-h-[17rem] sm:min-h-[20rem] lg:min-h-[22rem]',
}

function PortfolioSlide({
  work,
  index,
  active,
}: {
  work: (typeof portfolio)[number]
  index: number
  active: number
}) {
  const isActive = index === active

  return (
    <figure
      className={`relative aspect-[3/4] w-[86vw] max-w-[20rem] shrink-0 snap-center overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${
        isActive
          ? 'scale-100 border-primary/30 shadow-2xl shadow-black/50'
          : 'scale-[0.94] border-border/50 opacity-70'
      }`}
    >
      <Image
        src={work.image}
        alt={`${work.car} — ${work.context}`}
        fill
        className="object-cover"
        sizes="86vw"
        priority={index < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/5" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-heading text-[10px] font-medium uppercase tracking-[0.22em] text-primary/90">
          Lavoro {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-1 font-heading text-lg font-bold uppercase leading-tight tracking-wide text-white">
          {work.car}
        </h3>
        <p className="mt-1.5 text-sm leading-snug text-white/75">{work.context}</p>
      </figcaption>
    </figure>
  )
}

function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const updateActive = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const slides = track.querySelectorAll<HTMLElement>('[data-slide]')
    if (!slides.length) return

    const center = track.scrollLeft + track.clientWidth / 2
    let closest = 0
    let minDist = Infinity

    slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
      const dist = Math.abs(center - slideCenter)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })

    setActive(closest)
  }, [])

  return (
    <div className="relative mt-8 md:hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background via-background/80 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background via-background/80 to-transparent"
      />

      <div
        ref={trackRef}
        onScroll={updateActive}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[7vw] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {portfolio.map((work, i) => (
          <div key={`${work.car}-${i}`} data-slide className="snap-center">
            <PortfolioSlide work={work} index={i} active={active} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {portfolio.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Vai al lavoro ${i + 1}`}
            onClick={() => {
              const track = trackRef.current
              const slide = track?.querySelectorAll<HTMLElement>('[data-slide]')[i]
              if (track && slide) {
                track.scrollTo({
                  left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
                  behavior: 'smooth',
                })
              }
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? 'w-7 bg-primary' : 'w-1.5 bg-muted-foreground/35'
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Scorri · {active + 1} / {portfolio.length}
      </p>
    </div>
  )
}

function PortfolioMasonry() {
  return (
    <div className="mt-10 hidden columns-1 gap-4 md:block md:columns-2 md:gap-5 lg:columns-3">
      {portfolio.map((work, i) => (
        <Reveal
          key={`${work.car}-${i}`}
          delay={(i % 3) * 0.06}
          className="mb-4 break-inside-avoid md:mb-5"
        >
          <figure
            className={`group relative w-full overflow-hidden rounded-2xl border border-border bg-card ${sizeHeights[work.size]}`}
          >
            <Image
              src={work.image}
              alt={`${work.car} — ${work.context}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white">
                {work.car}
              </h3>
              <p className="mt-1 text-sm leading-snug text-white/70">{work.context}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="lavori" className="relative border-t border-border py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
            Portfolio clienti
          </p>
          <h2 className="mt-2 text-balance font-heading text-2xl font-bold uppercase leading-tight sm:mt-3 sm:text-3xl md:text-5xl">
            Ci affidano ciò che hanno di più prezioso
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            Supercar, auto da collezione e vetture di pregio — lavori reali per privati
            e per i centri Porsche e Lexus di Varese.
          </p>
        </Reveal>

        <PortfolioCarousel />
        <PortfolioMasonry />
      </div>
    </section>
  )
}
