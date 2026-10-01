import { EB_Garamond } from 'next/font/google'
import './globals.css'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
})

export const metadata = {
  title: 'Lamees A.',
  description: 'Computer Engineering student at Columbia University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="bg-site-bg text-site-text antialiased">
        {children}
      </body>
    </html>
  )
}
