import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Analytics } from "@vercel/analytics/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },
//   description: DATA.description,
//   openGraph: {
//     title: `${DATA.name}`,
//     description: DATA.description,
//     url: DATA.url,
//     siteName: `${DATA.name}`,
//     locale: "en_US",
//     type: "website",
//     images: DATA.avatarUrl,
//   },
//   authors: {
//     name: DATA.name,
//     url: DATA.url,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: `${DATA.name}`,
//     card: "summary_large_image",
//   },
//   verification: {
//     google: "",
//     yandex: "",
//   },
//   icons: {
//     icon: [{ url: "/favicon-196.png", sizes: "196x196", type: "image/png" }],
//     apple: [{ url: "/apple-icon-180.png" }],
//   },
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "black-translucent",
//     title: DATA.name,
//   },
// };

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Analytics />
            <Navbar />
          </TooltipProvider>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
