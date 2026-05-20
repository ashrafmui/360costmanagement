import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://360costmanagement.com";
const DESCRIPTION =
  "NYC-based accounting and cost-management firm offering bookkeeping, payroll, tax planning, financial reporting, and GAAP/IFRS-compliant analysis for businesses of all sizes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "360 Cost Management — NYC Accounting & Cost Management",
    template: "%s | 360 Cost Management",
  },
  description: DESCRIPTION,
  keywords: [
    "accounting services New York",
    "NYC accountant",
    "cost management",
    "bookkeeping",
    "payroll preparation",
    "tax planning",
    "financial reporting",
    "GAAP",
    "IFRS",
    "small business accounting",
    "360 Cost Management",
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "360 Cost Management",
    title: "360 Cost Management — NYC Accounting & Cost Management",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "360 Cost Management — Accounting & Cost Management Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Cost Management — NYC Accounting & Cost Management",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.ico" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.ico",
    apple: "/logo.svg",
  },
};

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "360 Cost Management",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.svg`,
  telephone: "+1-929-296-7431",
  faxNumber: "+1-929-296-7431",
  email: "info@360costmanagement.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "AdministrativeArea", name: "New York Metropolitan Area" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={familjenGrotesk.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
