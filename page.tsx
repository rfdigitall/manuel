import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Fleet } from '@/components/fleet'
import { Portfolio } from '@/components/portfolio'
import { Coverage } from '@/components/coverage'
import { CallbackForm } from '@/components/callback-form'
import { SiteFooter } from '@/components/site-footer'
import { MobileCallBar } from '@/components/mobile-call-bar'
import { ScrollSection } from '@/components/scroll-section'
import { company } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoWrecking',
  name: 'Soccorso Stradale Manuel H24',
  image: 'https://soccorsostradalemanuel.it/images/hero-iveco-giallo.jpeg',
  description:
    'Soccorso stradale H24 a Varese e in tutta Europa: carroattrezzi per auto, supercar e veicoli elettrici.',
  telephone: company.phonePrimaryRaw,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Mori, 5',
    addressLocality: 'Varese',
    postalCode: '21100',
    addressRegion: 'VA',
    addressCountry: 'IT',
  },
  areaServed: 'Europa',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <ScrollSection>
          <Services />
        </ScrollSection>
        <ScrollSection delay={0.05}>
          <Fleet />
        </ScrollSection>
        <ScrollSection delay={0.05}>
          <Portfolio />
        </ScrollSection>
        <ScrollSection delay={0.05}>
          <Coverage />
        </ScrollSection>
        <ScrollSection delay={0.05}>
          <CallbackForm />
        </ScrollSection>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  )
}
