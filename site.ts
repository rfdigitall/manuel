export const company = {
  name: 'Soccorso Stradale Manuel',
  tagline: 'H24',
  legalArea: 'Varese · Lombardia · Tutta Europa',
  address: 'Via Mori, 5 — 21100 Varese (VA)',
  phonePrimary: '+39 333 520 1001',
  phonePrimaryRaw: '+393335201001',
  phoneSecondary: '+39 328 045 1492',
  phoneSecondaryRaw: '+393280451492',
  // WhatsApp uses the number without "+" or spaces
  whatsapp: '393280451492',
  hours: 'Attivi 24 ore su 24, 7 giorni su 7 — festivi inclusi',
  mapsEmbed:
    'https://www.google.com/maps?q=Via+Mori+5,+21100+Varese+VA&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Via+Mori+5,+21100+Varese',
}

export type Service = {
  title: string
  description: string
  highlights: string[]
}

export const services: Service[] = [
  {
    title: 'Soccorso Stradale',
    description:
      'Recupero e traino di auto e furgoni in panne, dopo un guasto o un incidente. Arriviamo sul posto, mettiamo in sicurezza il veicolo e lo trasportiamo dove preferisci.',
    highlights: ['Traino in piena sicurezza', 'Veicolo messo in sicurezza', 'Officina o domicilio'],
  },
  {
    title: 'Soccorso in tutta Europa',
    description:
      "Sei rimasto fermo all'estero? Organizziamo il rientro del tuo veicolo da qualsiasi paese europeo con mezzi attrezzati per le lunghe percorrenze.",
    highlights: ['Trasporti internazionali', 'Lunghe percorrenze', 'Pratica seguita da noi'],
  },
  {
    title: 'Soccorso Auto Elettriche',
    description:
      "Procedure dedicate ai veicoli elettrici e ibridi: scollegamento sicuro dell'alta tensione e trasporto su pianale senza trascinamento delle ruote motrici.",
    highlights: ['Gestione alta tensione', 'Trasporto su pianale', 'Personale formato EV'],
  },
  {
    title: 'Soccorso Professionale',
    description:
      'Trasporto di supercar, auto storiche, moto e mezzi commerciali. Pianali idraulici, bisarche chiuse e cinghiaggio professionale per non lasciare il minimo segno.',
    highlights: ['Supercar & auto storiche', 'Bisarca chiusa', 'Cinghiaggio dedicato'],
  },
]

export type Vehicle = {
  name: string
  category: string
  image: string
  description: string
  badge: string
  /** Override immagine (es. contain per foto verticali/lunghe) */
  imageClass?: string
}

export const fleet: Vehicle[] = [
  {
    name: 'Nissan NV400 — Pianale',
    category: 'Carroattrezzi leggero',
    badge: 'Soccorso rapido',
    image: '/images/flotta/nissan-pianale.jpeg',
    description:
      'Pianale scorrevole, agile in città. Il primo mezzo che mandiamo quando chiami — pronto anche di notte.',
  },
  {
    name: 'Iveco Daily — Giallo',
    category: 'Pianale lungo',
    badge: 'Pianale lungo',
    image: '/images/flotta/iveco-giallo.jpeg',
    description:
      'Rampe basse per sportive e SUV. Giallo acceso, si vede da lontano — e arriva subito.',
  },
  {
    name: 'Iveco Daily — Blu',
    category: 'Pianale lungo',
    badge: 'Auto di pregio',
    image: '/images/flotta/iveco-blu.jpeg',
    description:
      'Allesto CO.ME.AR. per Porsche e Lexus Varese. Quando la macchina vale tanto, mandiamo questo.',
  },
  {
    name: 'Nissan Navara 4×4',
    category: 'Mezzo di supporto',
    badge: '4×4 offroad',
    image: '/images/flotta/navara-4x4.jpeg',
    description:
      'Pick-up 4×4 per fuoristrada e quei posti dove un carroattrezzi grande non passa.',
  },
  {
    name: 'Ford Transit Connect',
    category: 'Pronto intervento',
    badge: 'Pronto intervento',
    image: '/images/flotta/ford-transit.jpeg',
    description:
      'Parte in un attimo per avviamento, gonfiaggio o piccoli guasti. A volte basta questo.',
    imageClass:
      'object-contain object-center saturate-[0.82] grayscale-[0.18] transition-all duration-700 ease-out group-hover:saturate-100 group-hover:grayscale-0',
  },
  {
    name: 'Renault — Pesante',
    category: 'Camper e mezzi speciali',
    badge: 'Camper & speciali',
    image: '/images/flotta/renault-pesante.jpeg',
    description:
      'Camper, furgoni alti, mezzi fuori misura. Quando serve forza vera, arriva questo.',
    imageClass:
      'object-contain object-center saturate-[0.82] grayscale-[0.18] transition-all duration-700 ease-out group-hover:saturate-100 group-hover:grayscale-0',
  },
]

export type PortfolioSize = 'sm' | 'md' | 'lg'

export type Work = {
  car: string
  context: string
  image: string
  size: PortfolioSize
}

export const portfolio: Work[] = [
  {
    car: 'Lamborghini Huracán',
    context: 'Blu acceso, porte su — movimentata con cura.',
    image: '/images/portfolio/lambo-huracan.jpeg',
    size: 'lg',
  },
  {
    car: 'Ferrari 296 GTB',
    context: 'Rossa, consegnata al Centro Porsche.',
    image: '/images/portfolio/ferrari-296.jpeg',
    size: 'md',
  },
  {
    car: 'Porsche 911 GT3 RS',
    context: 'Gialla, GT3 RS — effetto garantito.',
    image: '/images/portfolio/porsche-gt3rs.jpeg',
    size: 'sm',
  },
  {
    car: 'Porsche 911 Dakar',
    context: 'Livrea Roughroads, edizione speciale.',
    image: '/images/portfolio/porsche-dakar.jpeg',
    size: 'md',
  },
  {
    car: 'Ferrari Purosangue',
    context: 'Caricamento a domicilio, rampa inclinata.',
    image: '/images/portfolio/purosangue-carico.jpeg',
    size: 'lg',
  },
  {
    car: 'Porsche 911 GT3',
    context: 'Verde racing, bisarca chiusa.',
    image: '/images/portfolio/porsche-gt3-bisarca.jpeg',
    size: 'md',
  },
  {
    car: 'Lamborghini Countach',
    context: 'Icona anni \'80 sull\'Atego.',
    image: '/images/portfolio/countach-atego.jpeg',
    size: 'lg',
  },
  {
    car: 'Lamborghini Countach',
    context: 'Bisarca coperta, porte a forbice.',
    image: '/images/portfolio/countach-bisarca.jpeg',
    size: 'md',
  },
  {
    car: 'Lamborghini Countach',
    context: 'Rosso fuoco, pianale dedicato.',
    image: '/images/portfolio/countach-pianale.jpeg',
    size: 'sm',
  },
  {
    car: 'Porsche 718 Boxster',
    context: 'Rosa shocking — tutta Varese l\'ha vista.',
    image: '/images/portfolio/porsche-boxster.jpeg',
    size: 'md',
  },
  {
    car: 'Ferrari Purosangue',
    context: 'Su rimorchio, cinghie a posto.',
    image: '/images/portfolio/purosangue-trailer.jpeg',
    size: 'sm',
  },
  {
    car: 'Dodge Coronet',
    context: 'Classico americano viola, anni \'50.',
    image: '/images/portfolio/dodge-coronet.jpeg',
    size: 'md',
  },
  {
    car: 'Audi A7 Sportback',
    context: 'Berlina con box da tetto.',
    image: '/images/portfolio/audi-a7.jpeg',
    size: 'sm',
  },
  {
    car: 'BMW Serie 3',
    context: 'Argento, cerchi neri — recupero pulito.',
    image: '/images/portfolio/bmw-serie3.jpeg',
    size: 'md',
  },
  {
    car: 'Microcar',
    context: 'Intervento rapido in strada.',
    image: '/images/portfolio/fiat-microcar.jpeg',
    size: 'sm',
  },
  {
    car: 'Flotta Iveco',
    context: 'Giallo e blu — pronti H24.',
    image: '/images/portfolio/iveco-duo.jpeg',
    size: 'lg',
  },
]

export const trustPoints = [
  { value: 'H24', label: 'Sempre operativi, anche di notte e nei festivi' },
  { value: 'Europa', label: 'Recuperi e trasporti oltre confine' },
  { value: 'EV', label: 'Procedure dedicate alle auto elettriche' },
  { value: 'Assicurato', label: 'Ogni veicolo trasportato è coperto' },
]
