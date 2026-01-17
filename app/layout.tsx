import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jon Coronel - Design Engineer",
  description: "Design engineer and web developer specializing in crafting exceptional UI components and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
