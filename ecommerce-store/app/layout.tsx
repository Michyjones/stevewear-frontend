import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stevewear',
  description: 'Ecommerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
