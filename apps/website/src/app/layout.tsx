"use client"
import FireCursor from './components/FireCursor/FireCursor';
import Navbar from './components/Navbar/Navbar';
import './global.css';
import { Container } from '@ems/common-ui';
import { Inter } from 'next/font/google'
import cn from "classnames"
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={cn(inter.className, 'bg-primary-light')}>


        <Navbar />
        {/* <FireCursor /> */}
        {children}

        </body>
    </html>
  );
}
