import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import fontInter from "@/configs/font-inter";
import fontJaini from "@/configs/font-jaini";

import { Providers } from "./providers";

import "./globals.css";

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "App",
  description: "Application",
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false,
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    noimageindex: true,
    nosnippet: true,
    notranslate: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`
          ${fontJaini.variable}
          ${fontInter.variable}
          antialiased
        `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
