import Particle from './components/Particles';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: `Sajudin Ma'ruf`,
  description: 'This web is made with 💙 by Udean',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Particle/>
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
