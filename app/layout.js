import { Fira_Code } from "next/font/google";
import "./globals.css";
import MenuProvider from "@/Components/Context/MenuContext";
import Head from "next/head";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Rohit React Js Developer",
  description: "I am Rohit - React Js Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#db5945" />
      </Head>
      <body className={inter.className}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
