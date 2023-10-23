import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizmify",
  description: "Quiz yourself on anything!",
};

/**
 * Dictates the layout of the app.
 * Also provides the context for the app.
 * Providers so that the app has access to:
 * - NextAuth
 * - Prisma
 * - Theme provider
 * - Query client provider
 * @param children (React.ReactNode): rest of the app
 * @returns (JSX.Element): Root layout (navbar, rest of the app)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Providers>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
