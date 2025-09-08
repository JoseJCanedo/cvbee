
import HeroLayout from '@/components/HeroLayout'
import './globals.css'

export const metadata = {
  title: {
    default: 'Chattahoochee Valley Beekeepers | Columbus GA Beekeeping Club',
    template: '%s | Chattahoochee Valley Beekeepers'
  },
  description: 'Join the Chattahoochee Valley Beekeepers Association in Columbus, Georgia. Monthly meetings, workshops, and community for beekeepers of all experience levels.',
  keywords: ['Chattahoochee Valley Beekeepers', 'Columbus GA beekeeping', 'Georgia beekeepers', 'beekeeping club', 'honey bees', 'apiary'],
  authors: [{ name: 'Chattahoochee Valley Beekeepers' }],
  creator: 'Chattahoochee Valley Beekeepers',
  publisher: 'Chattahoochee Valley Beekeepers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cvbeeks.org',
    title: 'Chattahoochee Valley Beekeepers',
    description: 'Columbus GA\'s premier beekeeping association',
    siteName: 'Chattahoochee Valley Beekeepers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chattahoochee Valley Beekeepers',
    description: 'Columbus GA\'s premier beekeeping association',
  },
  robots: {
    index: true,
    follow: true,
  },
}
export default function RootLayout({ children }) {
  return (<html lang="en">
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="canonical" href="https://cvbeeks.org" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Chattahoochee Valley Beekeepers",
            "alternateName": ["CVB", "Chattahoochee Valley Beekeepers Association"],
            "url": "https://cvbeeks.org",
            "description": "Beekeeping association serving the Chattahoochee Valley region in Columbus, Georgia.", "address": { "@type": "PostalAddress", "streetAddress": "Columbus Community Center, 123 Community Way", "addressLocality": "Columbus", "addressRegion": "GA", "postalCode": "31901", "addressCountry": "US" }, "contactPoint": { "@type": "ContactPoint", "telephone": "+1-706-555-2337", "contactType": "customer service", "email": "info@cvbeeks.org" }
          })
        }}
      />
    </head>
    <body className='roboto-serif-regular'>
      <HeroLayout>
        {children}
      </HeroLayout>
    </body>
  </html>
  )
}