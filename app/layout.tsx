import ChakraWrapper from "../components/Chakra";
// import ChakraWrapper from "@/components/Chakra";
import "./globals.css";
 
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ChakraWrapper>{children}</ChakraWrapper> 
      </body>
    </html>
  );
}
