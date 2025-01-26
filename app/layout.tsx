import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Toaster } from "sonner";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Chat App",
  description: "Chat with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
