import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { I18nProvider } from "../lib/i18n";

const space = Space_Grotesk({ 
  subsets: ["latin", "latin-ext", "vietnamese"], 
  variable: "--font-space" 
});

const inter = Inter({ 
  subsets: ["latin", "latin-ext", "cyrillic"], 
  variable: "--font-inter" 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin", "latin-ext", "cyrillic"], 
  variable: "--font-jetbrains" 
});

export const metadata: Metadata = {
  title: "EYES TECHNOLOGY | Умные очки с ИИ",
  description: "Next-generation AI Smart Glasses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${space.variable} ${inter.variable} ${jetbrains.variable} bg-background text-text-primary antialiased selection:bg-cyan selection:text-background`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <I18nProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
}