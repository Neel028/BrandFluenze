import type { Metadata } from "next";
import { Plus_Jakarta_Sans ,Inter,Instrument_Serif, DM_Sans } from 'next/font/google'
import "../style/css/globals.css";
import Footer from "@/components/layout-level/landing/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta-sans',
  display: 'swap',
})

const instrument_serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-intrument-serif',
  display: 'swap',
  weight:["400"]
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "BrandFluenze",
  description: "Empowering Your Brand to Reach Global Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta_sans.variable} ${instrument_serif.variable} ${dm_sans.variable} antialiased`}
      >
        <main>
           <div className="py-2.5 sm:py-4 lg:py-8">
            {children}
           </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
