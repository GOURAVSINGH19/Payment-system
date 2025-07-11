import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "../provider";
import { AppbarClient } from "../components/Appbarclient";
const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <AppbarClient />
        <body className={geist.className}>
          <main className="main">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
