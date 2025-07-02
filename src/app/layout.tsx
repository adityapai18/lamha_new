import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Lamhaa",
  description: "Experience exceptional dining at Lamhaa. Discover our carefully curated menu, elegant private event spaces, and warm hospitality.",
  keywords: "restaurant, fine dining, New York, private events, catering, reservations",
  authors: [{ name: "Lamhaa" }],
  openGraph: {
    title: "Lamhaa",
    description: "Experience exceptional dining at Lamhaa. Discover our carefully curated menu and elegant private event spaces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamhaa",
    description: "Experience exceptional dining at Lamhaa. Discover our carefully curated menu and elegant private event spaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
