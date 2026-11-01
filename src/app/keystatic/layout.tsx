import { notFound } from 'next/navigation';
import KeystaticApp from './keystatic';

export const metadata = {
  title: 'Content Management | Yasmin Khalid Portfolio',
  description: 'Manage case studies, featured products, and career milestones',
};

export default function Layout() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return <KeystaticApp />;
}
