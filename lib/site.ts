/**
 * جميع بيانات النشاط التجاري في مكان واحد.
 * عند تغيير أي معلومة (رقم، عنوان، صور) عدّل هذا الملف فقط.
 */

export const site = {
  name: 'رواد الخبرة لزينة السيارات',
  shortName: 'رواد الخبرة',
  activity: 'تاجر جملة اكسسوارات سيارات',
  city: 'ينبع',
  address: {
    street: 'الملك فهد، الصهاريج',
    city: 'ينبع',
    postalCode: '46413',
    country: 'المملكة العربية السعودية',
    full: 'الملك فهد، الصهاريج، ينبع 46413، المملكة العربية السعودية',
  },
  phone: {
    display: '+966 57 407 5786',
    tel: 'tel:+966574075786',
    e164: '+966574075786',
    whatsapp: 'https://wa.me/966574075786',
  },
  maps:
    'https://www.google.com/maps/place/%D8%B1%D9%88%D8%A7%D8%AF+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1%D9%87+%D9%84%D8%B2%D9%8A%D9%86%D9%87+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%D8%8C+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D9%81%D9%87%D8%AF%D8%8C+%D8%A7%D9%84%D8%B5%D9%87%D8%A7%D8%B1%D9%8A%D8%AC%D8%8C+%D9%8A%D9%86%D8%A8%D8%B9+46413%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%E2%80%AD/@24.0916279,38.0659787,22z/data=!4m6!3m5!1s0x15b905f650c2b9a3:0x82c77002f1b0524!8m2!3d24.0916223!4d38.0659848!16s%2Fg%2F11yl520ty2',
  coordinates: {
    latitude: 24.0916223,
    longitude: 38.0659848,
  },
  rating: {
    value: '5.0',
    count: 1,
  },
  review: {
    text: 'انصح بتعامل معهم بشده اتقان وعمل واخلاق وبعتمد المحل',
    author: 'سطام ال',
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rawad-al-khibra.vercel.app',
} as const

export const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#gallery', label: 'معرض الصور' },
  { href: '#reviews', label: 'آراء العملاء' },
  { href: '#location', label: 'موقعنا' },
  { href: '#contact', label: 'تواصل معنا' },
] as const

/**
 * معرض الصور.
 * الصور الحقيقية موجودة داخل:
 * public/images/
 */

export type GalleryItem = {
  file: string
  src: string | null
  alt: string
}

/**
 * صورة واجهة المحل الرئيسية
 */
export const heroImage: GalleryItem = {
  file: 'واجهة المحل.jpg',
  src: '/images/واجهة المحل.jpg',
  alt: 'واجهة محل رواد الخبره لزينه السيارات في ينبع',
}

/**
 * صورة قسم «من نحن»
 * نستخدم صورة واجهة المحل نفسها لعدم وجود صورة داخلية منفصلة.
 */
export const aboutImage: GalleryItem = {
  file: 'واجهة المحل.jpg',
  src: '/images/واجهة المحل.jpg',
  alt: 'واجهة محل رواد الخبره لزينه السيارات في ينبع',
}

/**
 * معرض الصور
 */
export const gallery: GalleryItem[] = [
  {
    file: '1.jpg',
    src: '/images/1.jpg',
    alt: 'إكسسوارات السيارات لدى رواد الخبره',
  },
  {
    file: '2.jpg',
    src: '/images/2.jpg',
    alt: 'إكسسوارات السيارات لدى رواد الخبره',
  },
  {
    file: '3.jpg',
    src: '/images/3.jpg',
    alt: 'إكسسوارات السيارات لدى رواد الخبره',
  },
  {
    file: '4.jpg',
    src: '/images/4.jpg',
    alt: 'إكسسوارات السيارات لدى رواد الخبره',
  },
  {
    file: '5.jpg',
    src: '/images/5.jpg',
    alt: 'إكسسوارات السيارات لدى رواد الخبره',
  },
]
