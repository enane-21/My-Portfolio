import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mengistu Animut Bogale — Full-Stack MERN Developer",
  description:
    "Portfolio of Mengistu Animut Bogale, a Full-Stack MERN Developer from Ethiopia. Skilled in React, Node.js, MongoDB, and Express. Open to work worldwide.",
  keywords: ["MERN Developer", "Full-Stack", "React", "Node.js", "Ethiopia", "Software Engineer"],
  authors: [{ name: "Mengistu Animut Bogale" }],
  openGraph: {
    title: "Mengistu Animut Bogale — Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer from Ethiopia. Built real-world systems with React, Node.js, MongoDB & Express. Open to opportunities worldwide.",
    url: "https://my-portfolio-enane-21.vercel.app",
    siteName: "Mengistu Animut Portfolio",
    images: [
      {
        url: "/my-photo.jpg",
        width: 400,
        height: 400,
        alt: "Mengistu Animut Bogale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mengistu Animut Bogale — Full-Stack MERN Developer",
    description: "Full-Stack MERN Developer. Open to work worldwide.",
    images: ["/my-photo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
