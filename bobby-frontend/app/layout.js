import './globals.css'
import Footer from './footer'
import Header from './Header'


export const metadata = {
  title: 'Pichekkista Bobby',
  description: 'Created with Love By Bharat',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" className='bg-[#FFE3E3]'>
      <body>
        <Header />{children}
        <Footer /></body>
    </html>
  )
}
