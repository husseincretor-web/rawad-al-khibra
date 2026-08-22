import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { Reviews } from '@/components/reviews'
import { Location } from '@/components/location'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { MobileBar } from '@/components/mobile-bar'
import { site } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  '@id': `${site.url}/#business`,
  name: site.name,
  description:
    'تاجر جملة اكسسوارات سيارات في ينبع، متخصص في منتجات وخدمات زينة وإكسسوارات السيارات.',
  url: site.url,
  telephone: site.phone.e164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: 'SA',
  },
  hasMap: site.maps,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.coordinates.latitude,
    longitude: site.coordinates.longitude,
  },
  review: [
    {
      '@type': 'Review',
      reviewBody: site.review.text,
      author: { '@type': 'Person', name: site.review.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
  ],
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
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  )
}
