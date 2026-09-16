import '../styles/globals.css';
import Navbar from '../components/Navbar';
import ScrollbarIndicator from '../components/ScrollbarIndicator';

export const metadata = {
  title: 'Yasmin Portfolio',
  description: 'Portfolio of Yasmin Khalid',
  icons: {
    icon: '/icons/yasmin-pixel.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <ScrollbarIndicator />
        {children}
      </body>
    </html>
  );
}