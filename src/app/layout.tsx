import type { Metadata } from "next";
import { Work_Sans } from "next/font/google"; // Import a minimalist font
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"], // Light to Semi-Bold
});

export const metadata: Metadata = {
  title: "NovaMart",
  description: "Futuristic and sleek shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
