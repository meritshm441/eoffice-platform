import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shared e-Office System',
  description: 'shared e-Office is a web-based application designed to streamline office operations and enhance productivity.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
