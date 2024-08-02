import type { Metadata } from "next";
import { Fira_Sans, Cormorant } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const fira = Fira_Sans({weight:["100","200","300","400","500","600","700","800","900"], subsets:["latin"], variable:"--font-fira"});
const cormorant = Cormorant({weight:["300","400","500","600","700"], subsets:["latin"], variable:"--font-cormorant"});

export const metadata: Metadata = {
  title: "Jim Pamplona",
  description: "Jim Pamplona's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"className={`${fira.variable} ${cormorant.variable} font-sans`} >
      <body className={fira.className}> <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
