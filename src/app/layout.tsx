import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AdmissionModal from "@/components/AdmissionModal";

export const viewport: Viewport = {
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Little Angel's English School | Best School in Singarva, Ahmedabad",
    template: "%s | Little Angel's English School",
  },
  description:
    "Little Angel's English School (સાંઈ વિદ્યા મંદિર) offers quality education from Jr. KG to 8th Standard in Singarva, Ahmedabad. Managed by Naagneshwari Education Trust. Admissions Open 2026-27.",
  keywords: [
    "Little Angels English School",
    "school in Singarva",
    "school in Ahmedabad",
    "Jr KG admission Ahmedabad",
    "primary school Ahmedabad",
    "best school Singarva",
    "Naagneshwari Education Trust",
    "સાંઈ વિદ્યા મંદિર",
    "English medium school Ahmedabad",
    "Balvatika Ahmedabad",
  ],
  authors: [{ name: "Little Angel's English School" }],
  creator: "Little Angel's English School",
  publisher: "Naagneshwari Education Trust",
  metadataBase: new URL("https://little-angle.mahispark.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://little-angle.mahispark.com",
    siteName: "Little Angel's English School",
    title: "Little Angel's English School | Best School in Singarva, Ahmedabad",
    description:
      "Quality education from Jr. KG to 8th Standard. New campus now open! Admissions Open 2026-27.",
    images: [
      {
        url: "/images/school-building.jpeg",
        width: 1200,
        height: 630,
        alt: "Little Angel's English School - New Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Angel's English School | Ahmedabad",
    description:
      "Quality education from Jr. KG to 8th Standard. Admissions Open 2026-27.",
    images: ["/images/school-building.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Little Angel's English School",
  alternateName: "સાંઈ વિદ્યા મંદિર",
  url: "https://little-angle.mahispark.com",
  logo: "https://little-angle.mahispark.com/images/logo.png",
  image: "https://little-angle.mahispark.com/images/school-building.jpeg",
  description:
    "Little Angel's English School offers quality education from Jr. KG to 8th Standard in Singarva, Ahmedabad.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Opp. Anant Sky, Nr. Maruti Residency-3, Vadvali Chali, Singarva",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382421",
    addressCountry: "IN",
  },
  telephone: ["+918866160867", "+917802841742", "+919998040867"],
  foundingOrganization: {
    "@type": "Organization",
    name: "Naagneshwari Education Trust",
  },
  areaServed: {
    "@type": "City",
    name: "Ahmedabad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <AdmissionModal />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
