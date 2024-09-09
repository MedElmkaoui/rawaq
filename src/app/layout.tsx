import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "رواق",
  description: "المطعم الشعبي الأول في المغرب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`antialiased`}
      >
        <main className="overflow-hidden">
          {children}
        </main>
        
      </body>
    </html>
  );
}
