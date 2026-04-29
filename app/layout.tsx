import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio de [Tu Nombre]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}