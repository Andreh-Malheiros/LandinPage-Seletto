import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seletto Barbearia',
  description: 'Fundado por Andreh Malheiros',
  generator: '',
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
