import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "SITE NAME",
  description: "SITE DESCRIPTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={montserrat.style}>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </html>
  );
}
