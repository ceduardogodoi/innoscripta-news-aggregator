import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/organisms/header";
import { ContentWrapper } from "@/components/organisms/content-wrapper";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<PropsWithChildren>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <main>
          <ContentWrapper className="flex-col items-stretch">
            {children}
          </ContentWrapper>
        </main>
      </body>
    </html>
  );
}
