// import TestHeader from '@/components/tool/fix/T&C/TestHeader'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T&C',
  description: 'Docs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      {/* <TestHeader/> */}
        {children}
        </body>
    </html>
  )
}
