import { Inter, Lusitana } from 'next/font/google';

// Importing 'Inter' font with the desired subsets and settings
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Correcting the font name to 'Lusitana' for the Lusitana import
export const lusitana = Lusitana({
  subsets: ['latin'], // Correcting the subset to 'latin' for Lusitana
  display: 'swap',
  weight: '400',
});
