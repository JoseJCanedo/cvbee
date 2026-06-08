import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
// import { HeroUIProvider } from "@heroui/react";
import "../styles/globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["beekeeping", "bees", "Chattahoochee Valley", "Georgia", "CVBA", "honey"],
  icons: {
    icon: "/favicon.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <HeroUIProvider> */}
            {children}
          {/* </HeroUIProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
