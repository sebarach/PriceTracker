import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const space_Grotesk = Space_Grotesk({
  subsets:['latin'],weight:[
    '300','400','500','600','700'
  ]
})

export const metadata: Metadata = {
  title: 'Rastreador de Precios',
  description: 'Generado para trackear creditos hipotecarios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
      <Navbar />
        </main>
        {children}
        </body>
    </html>
  )
}
