
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Heder from "@/components/Heder";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['Latin'] })
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          {/* header */}
          <Heder></Heder>
          <main className="min-h-screen">
            {children}
          </main>


          {/* footer */}
          <footer className="bg-blue-100 py-10" >
            <div className="container mx-auto px-4 text-center">
              made with love
            </div>

          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
