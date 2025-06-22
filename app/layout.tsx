import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Prince Gupta - Full Stack Developer',
  description: 'Innovative full-stack developer creating cutting-edge web applications with modern technologies and stunning user experiences.',
  keywords: ['web developer', 'full stack', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Prince Gupta' }],
  creator: 'Prince Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Prince Gupta - Full Stack Developer',
    description: 'Innovative full-stack developer creating cutting-edge web applications',
    siteName: 'Prince Gupta Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '../public/favicon.ico',
    shortcut: '../public/favicon.ico',
    apple: '../public/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}