import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Blink Media',
  // description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text min-h-screen`}>{children}</body>
    </html>
  );
}
