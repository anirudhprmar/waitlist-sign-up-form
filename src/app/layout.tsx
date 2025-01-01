import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Join Our Waitlist',
  description: 'Be the first to know when we launch. Join our exclusive waitlist today.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
  openGraph: {
    title: 'Join Our Waitlist',
    description: 'Be the first to know when we launch. Join our exclusive waitlist today.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Waitlist Signup',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
