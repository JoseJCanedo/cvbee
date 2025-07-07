import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "components/Header";
import Footer from "components/Footer";

import "styles/globals.css";
import Banner from "components/Banner";

export const metadata: Metadata = {
  title: "Chattahoochee Valley Beekeepers",
  description: "Chattahoochee Valley Beekeepers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="MqJmv4Tfd7K60rsru5ckhuMCcq9zBIvYx1fsyNvWL-A" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <Header />
            <Banner />
            {children}
            <Footer />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
