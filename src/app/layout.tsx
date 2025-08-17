import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSansRegular = localFont({
  src: "./fonts/WorkSans-Regular.ttf",
  variable: "--font-work-sans-regular",
  weight: "400",
});

const workSansBold = localFont({
  src: "./fonts/WorkSans-Bold.ttf",
  variable: "--font-work-sans-bold",
  weight: "700",
});

const workSansSemiBold = localFont({
  src: "./fonts/WorkSans-SemiBold.ttf",
  variable: "--font-work-sans-semi-bold",
  weight: "600",
});


const manropeRegular = localFont({
  src: "./fonts/Manrope-Regular.ttf",
  variable: "--font-manrope",
  weight: "400",
});

const manropeBold = localFont({
  src: "./fonts/Manrope-Bold.ttf",
  variable: "--font-manrope-bold",
  weight: "700",
});

const manropeSemiBold = localFont({
  src: "./fonts/Manrope-SemiBold.ttf",
  variable: "--font-manrope-semi-bold",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Barath - Senior Software Engineer",
  description: "Barath - Senior Software Engineer & Frontend Specialist",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSansRegular.variable} ${workSansBold.variable} ${workSansSemiBold.variable} ${manropeRegular.variable} ${manropeBold.variable} ${manropeSemiBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
