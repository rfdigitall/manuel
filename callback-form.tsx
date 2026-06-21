'use client'

import { useState, type FormEvent } from 'react'
import { PhoneCall, MessageCircle, Check } from 'lucide-react'
import { company } from '@/lib/site'

export function CallbackForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    const text = `Salve, sono ${name.trim()}. Vorrei essere richiamato al numero ${phone.trim()} per un soccorso stradale.`
    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section
      id="richiamo"
      className="relative border-t border-border py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card sm:rounded-3xl">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border p-5 sm:p-7 md:border-b-0 md:border-r md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.25em]">
                Vuoi essere richiamato?
              </p>
              <h2 className="mt-2 text-balance font-heading text-2xl font-bold uppercase leading-tight sm:mt-3 sm:text-3xl md:text-4xl">
                Lasciaci nome e numero
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4">
                Non riesci a parlare ora? Compila il form: ti ricontattiamo noi nel
                più breve tempo possibile. Per le emergenze, chiama subito.
              </p>

              <a
                href={`tel:${company.phonePrimaryRaw}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] sm:mt-7 sm:w-auto sm:text-base"
              >
                <PhoneCall className="h-5 w-5" />
                {company.phonePrimary}
              </a>
            </div>

            <div className="p-5 sm:p-7 md:p-10">
              {sent ? (
                <div className="flex h-full flex-col items-start justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-semibold uppercase">
                    Richiesta pronta!
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    Si è aperto WhatsApp con il tuo messaggio già compilato: premi
                    invio per inviarcelo. Ti richiameremo al più presto.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Invia un&apos;altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="cb-name"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Il tuo nome
                    </label>
                    <input
                      id="cb-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Es. Marco Rossi"
                      className="rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="cb-phone"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Il tuo numero
                    </label>
                    <input
                      id="cb-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Es. 333 123 4567"
                      className="rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] active:scale-100 sm:text-base"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Richiedi di essere richiamato
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Invio tramite WhatsApp · risposta rapida
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
