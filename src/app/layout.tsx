import type { Metadata, Viewport } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vilsonpinturas.pt"),
  title:
    "Vilson Pinturas | Pintura Residencial, Comercial, Fachadas e Muros em Portugal",
  description:
    "Serviços profissionais de pintura residencial, comercial, fachadas e muros em Portugal. Acabamento de qualidade, organização e confiança. Peça orçamento.",
  keywords: [
    "pintura residencial em Portugal",
    "pintura comercial",
    "pintura de fachadas",
    "pintura de muros",
    "pintor profissional",
    "serviços de pintura",
    "orçamento de pintura",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "Vilson Pinturas | Pintura profissional em Portugal",
    description:
      "Pintura residencial, comercial, fachadas e muros. Acabamento que valoriza.",
    siteName: "Vilson Pinturas",
  },
  alternates: { canonical: "https://vilsonpinturas.pt" },
};

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
