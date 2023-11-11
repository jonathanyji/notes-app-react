import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// START Prime React
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import 'primeicons/primeicons.css';
import NavBar from './components/nav-bar/nav-bar';
// END Prime React

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar></NavBar>
          {children}
        </body>
      </html>
    </PrimeReactProvider>
  )
}
