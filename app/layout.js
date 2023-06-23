import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: `Sajudin Ma'ruf`,
  description: 'Web ini dibuat dengan 💙 oleh Sajudin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content={process.env.OG_IMAGE} />
      </Head>
      <body>
        {children}
        </body>
    </html>
  )
}
