
import './globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import localFont from '@next/font/local'
import Sidebar from '../app/components/sidebar'
import {Toaster} from './components/toast'



export const metadata : Metadata = {
  title: 'Christian von Bredow',
  description: 'Developer, writer and programmer',
}

const kaisei = localFont({
  src: '../../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={clsx('text-white bg-[#202124]', kaisei.variable)}
    >
      
      <body className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto'>
    
        <Sidebar />
        <Toaster position='bottom-right'/>
        <main className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
          {children}
        </main>
      </body>
    </html>
  )
}
