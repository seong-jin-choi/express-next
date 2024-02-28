import { Metadata } from "next";
import "../assets/vendor/css/pages/page-auth.css";
import "../assets/vendor/css/pages/page-misc.css";
import "../assets/vendor/css/rtl/core.css";
import "../assets/vendor/css/rtl/theme-default.css";

export const metadata: Metadata = {
  title: "SITE NAME",
  description: "SITE DESCRIPTION",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
