import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Varsha Bhaskar — AI/ML Engineer & Software Developer",
  description:
    "Portfolio of Varsha Bhaskar — AI/ML Engineer, Software Developer, and Researcher specialising in LLMs, RAG, backend systems, and computational biology.",
  keywords: [
    "Varsha Bhaskar",
    "AI Engineer",
    "ML Engineer",
    "Software Developer",
    "IIIT Delhi",
    "LangChain",
    "PyTorch",
    "Portfolio",
  ],
  authors: [{ name: "Varsha Bhaskar" }],
  openGraph: {
    title: "Varsha Bhaskar — AI/ML Engineer",
    description:
      "Building AI systems, backend applications, and computational biology projects.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
