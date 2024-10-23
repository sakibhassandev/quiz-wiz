import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizWiz | Quiz App",
  description: "QuizWiz is an quiz generator that creates 20 quizzes randomly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

// <reference types="next" />
// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
