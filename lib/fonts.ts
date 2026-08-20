import { Cormorant_Garamond, Geist, Rajdhani } from "next/font/google";

// Display serif — keeps the "timeless wisdom" nod of the Thoth brand.
export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Body + UI sans.
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Small uppercase eyebrow labels.
export const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const fontVariables = `${cormorant.variable} ${geistSans.variable} ${rajdhani.variable}`;
