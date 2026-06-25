import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrutalityRug | Solana Trading Bot",
  description: "The most advanced Solana trading bot. Snipe tokens, create pump.fun launches, automate sells, and maximize profits with MEV protection.",
  keywords: ["Solana", "trading bot", "pump.fun", "crypto", "MEV", "token sniper"],
  openGraph: {
    title: "BrutalityRug | Solana Trading Bot",
    description: "The most advanced Solana trading bot for pump.fun trading",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrutalityRug | Solana Trading Bot",
    description: "The most advanced Solana trading bot for pump.fun trading",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
        <div className="gradient-bg" />
        <div className="grid-pattern" />
        {children}
      </body>
    </html>
  );
}
