import { Fira_Sans, Fira_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";

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
  title: "Paradane | Custom Software Development & Digital Solutions",
  description: "Paradane is a software development company delivering cutting-edge web, mobile, and AI-powered solutions. We help businesses innovate with custom applications, UI/UX design, and digital transformation services tailored to their needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${firaMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
