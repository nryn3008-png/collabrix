import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aman Soni — Product Designer & Developer',
  description:
    'Product designer with 4+ years of experience helping founders and teams turn ideas into real, working software. I handle design, systems, and code.',
  keywords: [
    'Product Designer',
    'UX Designer',
    'Design Systems',
    'Figma',
    'React Developer',
    'Freelance Designer',
    'MVP Development',
    'SaaS Design',
  ],
  authors: [{ name: 'Aman Soni' }],
  openGraph: {
    title: 'Aman Soni — Product Designer & Developer',
    description:
      'I design products and build them too. From early concepts to shipped products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Soni — Product Designer & Developer',
    description:
      'I design products and build them too. From early concepts to shipped products.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
