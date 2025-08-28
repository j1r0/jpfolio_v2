import type { Metadata } from "next";
import { Baskervville, Krona_One} from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { ThemeProvider } from "./providers";

const baskerville = Baskervville({weight:["400"], subsets:["latin"],variable:"--font-baskerville"});
const krona = Krona_One({weight:["400"], subsets:["latin"],variable:"--font-krona"}); 
const NeueMontreal = localFont({
  src: [
    {path:"../public/fonts/NeueMontreal-Regular.otf", weight:"400"},
    {path:"../public/fonts/NeueMontreal-Bold.otf", weight:"700"},
    {path:"../public/fonts/NeueMontreal-Italic.otf", weight:"400", style:"italic"},
    {path:"../public/fonts/NeueMontreal-BoldItalic.otf", weight:"700", style:"italic"},
    {path:"../public/fonts/NeueMontreal-Medium.otf", weight:"500"},
    {path:"../public/fonts/NeueMontreal-MediumItalic.otf", weight:"500", style:"italic"},
    {path:"../public/fonts/NeueMontreal-Light.otf", weight:"300"},
    {path:"../public/fonts/NeueMontreal-LightItalic.otf", weight:"300", style:"italic"},


  ]
, variable:"--font-neue-montreal"}); 

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
    <html lang="en" suppressHydrationWarning className={`${NeueMontreal.variable} ${baskerville.variable} ${krona.variable} font-sans`} >
      <body className={NeueMontreal.className}> <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      enableColorScheme

          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}