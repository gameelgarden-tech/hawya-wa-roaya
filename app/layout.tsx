import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "هوية ورؤية",
  description: "من الإرث إلى الأثر - منصة التراث والاقتصاد الإبداعي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={`${cairo.className} bg-[#2B1B14]`}>
        {children}
      </body>
    </html>
  );
}