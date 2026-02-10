export interface Artwork {
  id: string;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  mainImage: string;
  detailImages: string[];
  description: string;
  shopLink?: string;
}

export interface Work {
  id: string;
  title: string;
  thumb: string;
  gallery: string[];
  shopLink?: string;
}

export const painting: Artwork[] = [
  {
    id: 'p1',
    title: 'Ancient Trace I',
    year: '2018',
    technique: 'Acrilico su tela',
    dimensions: '50 × 50 cm',
    mainImage: '/assets/painting/ancientracepaint1.webp',
    detailImages: ['/assets/painting/ancientracepaint1.webp'],
    description: 'Opera di apertura della serie, in cui texture organiche e stratificazioni cromatiche suggeriscono pareti consumate dal tempo.',
    shopLink: ''
  }
];

export const digitalArt: Artwork[] = [
  {
    id: 'd1',
    title: 'Ancient Race Digital 1',
    year: '2022',
    technique: 'Elaborazione digitale su base pittorica',
    dimensions: '50 × 50 cm',
    mainImage: '/assets/digital/ancientracedigital1.webp',
    detailImages: ['/assets/digital/ancientracedigital1.webp'],
    description: 'Versione digitale ispirata alla serie Ancient Trace.',
    shopLink: ''
  }
];

export const photography: Artwork[] = [
  {
    id: 'ph1',
    title: 'Ancient Race Photography 1',
    year: '2021',
    technique: 'Stampa fotografica fine art',
    dimensions: '40 × 40 cm',
    mainImage: '/assets/photography/ancientracephotography1.webp',
    detailImages: ['/assets/photography/ancientracephotography1.webp'],
    description: 'Fotografia che isola dettagli materici della serie Ancient Trace.',
    shopLink: ''
  }
];

export const tshirts: Artwork[] = [
  {
    id: 't1',
    title: 'Ancient Race Tshirt 1',
    year: '2024',
    technique: 'Stampa digitale su cotone',
    dimensions: 'Taglie S‑M‑L‑XL',
    mainImage: '/assets/tshirt/ancientracetshirt1.webp',
    detailImages: ['/assets/tshirt/ancientracetshirt1.webp'],
    description: 'T‑shirt con stampa ispirata alla serie Ancient Trace.',
    shopLink: ''
  }
];
