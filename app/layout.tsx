import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LineFloatButton } from "@/components/line-float-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { facebookUrl, lineUrl } from "@/lib/social";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
});

const siteUrl = "https://st0ckh0lm.github.io/savecost-intertrade/";
const siteTitle = "SaveCost Intertrade | เคมีบำบัดน้ำ ล้างคูลลิ่งทาวเวอร์ สารกรองน้ำ";
const siteDescription =
  "บริษัท เซฟคอส อินเตอร์เทรด จำกัด จำหน่ายเคมีปรับปรุงคุณภาพน้ำสำหรับคูลลิ่งทาวเวอร์ ชิลเลอร์ บอยเลอร์ สารกรองน้ำ จาระบี สเปรย์อุตสาหกรรม พร้อมบริการล้างคูลลิ่งทาวเวอร์และเปลี่ยนสารกรองน้ำ ดูแลกว่า 30 โรงงานตั้งแต่ปี 2015";
const ogImage = `${siteUrl}images/portfolio/full/work-01.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteUrl,
    siteName: "SaveCost Intertrade",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: ogImage, width: 1280, height: 960, alt: "ทีมงาน SaveCost Intertrade ดูแลคูลลิ่งทาวเวอร์ในโรงงานอุตสาหกรรม" }],
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: [ogImage] },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "บริษัท เซฟคอส อินเตอร์เทรด จำกัด",
  alternateName: "SaveCost Intertrade",
  description: siteDescription,
  url: siteUrl,
  image: ogImage,
  logo: `${siteUrl}images/savecost-icon.png`,
  foundingDate: "2015",
  telephone: ["+66985241542", "+66818897068"],
  email: "savecost.info@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "146/4 ถนนประชาทร แขวงลาดกระบัง",
    addressLocality: "เขตลาดกระบัง",
    addressRegion: "กรุงเทพมหานคร",
    postalCode: "10520",
    addressCountry: "TH",
  },
  geo: { "@type": "GeoCoordinates", latitude: 13.7268453, longitude: 100.7300746 },
  areaServed: ["ชลบุรี", "ฉะเชิงเทรา", "ระยอง", "สมุทรปราการ", "สมุทรสาคร", "นครราชสีมา", "กรุงเทพมหานคร"],
  sameAs: [facebookUrl, lineUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={ibmPlexSansThai.variable}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <LineFloatButton />
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} type="application/ld+json" />
      </body>
    </html>
  );
}
