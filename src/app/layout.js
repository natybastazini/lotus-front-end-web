// import localFont from "next/font/local";

import "./globals.css";

// Import font
import { abeezee , inter } from "../app/fonts/fonts";

export const metadata = {
  title: "Lotus",
  description: "Para sua maternidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={` ${inter.variable} ${abeezee.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}