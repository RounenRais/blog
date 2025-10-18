"use client";
import "./globals.css";
import { ThemeProvider } from "../components/ui/theme-provider";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import Fonts from "../components/ui/fonts";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
const ObjViewer = dynamic(() => import("../components/objViewer"), {
  ssr: false,
});
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={` min-h-screen bg-background text-foreground flex flex-col items-center  `}>
        <Fonts />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <ObjViewer />
          <AnimatePresence mode="wait" initial={true}>
            {children}
          </AnimatePresence>
      
        <Footer />
             </ThemeProvider>
      </body>
   
    </html>
  );
}
