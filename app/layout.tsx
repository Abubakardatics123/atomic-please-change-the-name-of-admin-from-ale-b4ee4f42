import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asad Rana — Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Asad Rana, a full-stack developer and UI/UX designer based in Lahore, Pakistan. Available for freelance projects and full-time opportunities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
