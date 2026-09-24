import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phoenix Epoxy Coatings | Epoxy & Concrete Floor Coatings",
  description: "Professional epoxy flooring and concrete coating systems for garages, homes and commercial spaces across the Phoenix metro.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/v2-assets/logo.webp",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
