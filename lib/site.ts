/**
 * جميع بيانات النشاط التجاري في مكان واحد.
 * عند تغيير أي معلومة (رقم، عنوان، صور) عدّل هذا الملف فقط.
 */

export const site = {
  name: 'رواد الخبره لزينه السيارات',
  shortName: 'رواد الخبره',
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
 * ضع الصور الحقيقية في مجلد public/images بنفس الاسم المذكور في `file`
 * (يفضل صيغة WebP أو AVIF)، ثم غيّر `src` إلى `/images/اسم-الصورة.webp`.
 * الخانات التي قيمة src فيها null تظهر كإطار فارغ بدون أي صورة وهمية.
 */
export type GalleryItem = {
  file: string
  src: string | null
  alt: string
}

/** صورة الغلاف الرئيسية (Hero) وصورة قسم «من نحن». نفس طريقة الاستبدال. */
export const heroImage: GalleryItem = {
  file: 'hero.webp',
  src: null,
  alt: 'واجهة محل رواد الخبره لزينه السيارات في ينبع',
}

export const aboutImage: GalleryItem = {
  file: 'about.webp',
  src: null,
  alt: 'داخل محل رواد الخبره لزينه السيارات',
}

export const gallery: GalleryItem[] = [
  { file: 'gallery-1.webp', src: null, alt: 'واجهة محل رواد الخبره لزينه السيارات في ينبع' },
  { file: 'gallery-2.webp', src: null, alt: 'عرض اكسسوارات السيارات داخل المحل' },
  { file: 'gallery-3.webp', src: null, alt: 'قسم زينة السيارات في المحل' },
  { file: 'gallery-4.webp', src: null, alt: 'منتجات وإكسسوارات متوفرة لدى رواد الخبره' },
  { file: 'gallery-5.webp', src: null, alt: 'خدمة تركيب اكسسوارات السيارات' },
  { file: 'gallery-6.webp', src: null, alt: 'صور من داخل معرض رواد الخبره لزينه السيارات' },
]
