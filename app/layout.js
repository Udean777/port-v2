import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: `Sajudin Ma'ruf`,
  description: 'Web ini dibuat dengan 💙 oleh Sajudin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
