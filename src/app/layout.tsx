import type { Metadata } from "next";
import { Familjen_Grotesk } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "360 Cost Management",
  description: "Accounting & consulting services that put your costs in focus.",
  icons: {
    icon: [
      { url: "/favicon.ico" },           // default
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",            // Windows / legacy
    apple: "/apple-touch-icon.png",      // iOS
  },
};
const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'], // you can add other weights if you want
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={familjenGrotesk.className}>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body>{children}</body>
    </html>
  );
}
