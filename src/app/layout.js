import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GlobalContextProvider } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
