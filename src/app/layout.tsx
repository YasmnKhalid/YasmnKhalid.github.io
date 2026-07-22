import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Yasmin Portfolio',
  description: 'Portfolio of Yasmin Khalid',
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
        {children}
      </body>
    </html>
  );
}