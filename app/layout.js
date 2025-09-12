import { headers } from "next/headers";
import { Fira_Sans, Fira_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import WidgetProvider from "@/components/providers/WidgetProvider";
import Footer from "@/components/Shared/Footer";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

export const metadata = {
  title: {
    default: 'Paradane | Custom Software Development & Digital Solutions',
    template: '%s | Paradane'
  },
  description: "Paradane is a software development company delivering cutting-edge web, mobile, and AI-powered solutions. We help businesses innovate with custom applications, UI/UX design, and digital transformation services tailored to their needs.",
};

export default function RootLayout({ children }) {
  const nonce = headers().get("x-nonce");

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Custom Software Development Company",
              "url": "https://www.paradane.com",
              "description":
                "Paradane is a premium custom software development company with experience building innovative custom software solutions for businesses worldwide",
              "brand": {
                "@type": "Brand",
                "name": "Paradane"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Clutch",
                  "url": "https://clutch.co/profile/paradane"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${firaSans.variable} ${firaMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WidgetProvider nonce={nonce} />
      </body>
    </html>
  );
}
