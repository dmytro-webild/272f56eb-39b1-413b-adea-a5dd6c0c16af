import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Apex Grooming Co. | Luxury Barber Shop',
  description: 'Experience precision cuts, modern style, and a premium grooming experience at Apex Grooming Co. Book your appointment for unparalleled craftsmanship.',
  openGraph: {
    "title": "Apex Grooming Co. | Luxury Barber Shop",
    "description": "Experience precision cuts, modern style, and a premium grooming experience at Apex Grooming Co. Book your appointment for unparalleled craftsmanship.",
    "url": "https://www.apexgrooming.com",
    "siteName": "Apex Grooming Co.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186474.jpg",
        "alt": "Luxurious barber shop interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Apex Grooming Co. | Luxury Barber Shop",
    "description": "Experience precision cuts, modern style, and a premium grooming experience at Apex Grooming Co. Book your appointment for unparalleled craftsmanship.",
    "images": [
      "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186474.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};




const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
