import type { Metadata } from 'next'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ToastProvider from '@/providers/toast.provider'

export const metadata: Metadata = {
  title: 'My Resume',
  description: 'My Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <ToastProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
