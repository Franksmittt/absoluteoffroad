import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Absolute Offroad - Premium 4x4 Accessories',
  description: 'Shop South Africa\'s largest curated portfolio of premium 4x4 accessories for Toyota Land Cruiser 300, 76, 78, and 79.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

