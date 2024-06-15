import type { Metadata } from "next";
import { Gluten } from "next/font/google";
import "./globals.css";

const gluten = Gluten({ subsets: ["latin"], weight: "800" });

export const metadata: Metadata = {
  title: "Fathers Day",
  description: "An eCard for the best dad in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "#ffdd55"}} className={gluten.className}>{children}</body>
    </html>
  );
}
