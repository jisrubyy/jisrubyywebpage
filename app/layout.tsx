import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jisrubyy Web - 개발자 페이지",
  description: "Jisrubyy의 프로젝트와 개발 과정을 기록하고 공유합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
