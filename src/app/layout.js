import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tod-AI - Your Smart AI Tutor",
  description: "Tod-AI is an advanced AI tutor that helps you learn efficiently with personalized lessons and interactive problem-solving.",
  keywords: ["AI tutor", "Tod-AI", "smart learning", "personalized education", "online tutor", "interactive learning"],
  openGraph: {
    title: "Tod-AI - Your Smart AI Tutor",
    description: "Learn smarter with Tod-AI, your personalized AI tutor for effective learning and problem-solving.",
    url: "https://tod-ai.com",
    type: "website",
    images: [
      {
        url: "/tod-ai-preview.png",
        width: 1200,
        height: 630,
        alt: "Tod-AI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tod-AI - Your AI Tutor",
    description: "Tod-AI is your personal AI tutor, making learning smarter and interactive.",
    images: ["/tod-ai-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
