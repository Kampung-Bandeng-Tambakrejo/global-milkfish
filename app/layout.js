import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'] 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Global Milkfish | Pusat Oleh-oleh Bandeng Tambakrejo',
    template: '%s | Global Milkfish'
  },
  description: 'Pusat UMKM Bandeng Presto, Otak-otak, dan olahan ikan terbaik dari Kampung Bandeng Tambakrejo, Semarang. Temukan produk lokal berkualitas di sini.',
  keywords: ['Bandeng Presto', 'Bandeng Presto Kota Semarang', 'Bandeng Kota Semarang', 'Bandeng Semarang', 'Oleh-oleh Semarang', 'Kampung Bandeng Tambakrejo', 'UMKM Semarang', 'Global Milkfish', 'Bandeng Duri Lunak', 'Wisata Kuliner Semarang'],
  authors: [{ name: 'KKN Giat UNNES' }],
  creator: 'KKN Giat UNNES',
  publisher: 'Global Milkfish Team',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Global Milkfish - Sentra Bandeng Tambakrejo',
    description: 'Temukan aneka olahan bandeng terbaik dari UMKM Tambakrejo, Semarang.',
    url: 'https://umkmglobalmilkfish.vercel.app/',
    siteName: 'Global Milkfish',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="KODE_VERIFIKASI_GOOGLE_CONSOLE" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
