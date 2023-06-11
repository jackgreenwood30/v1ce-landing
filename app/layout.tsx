import '@styles/globals.css'

import NavbarComponent from '@components/navbar/navbarComponent'

export const metadata = {
  title: "V1CE Landing Page V2",
  description: "V1CE Landing is currently under development - Jack"
}

interface RootLayoutProps {
  children: React.ReactNode,
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        <main className='app'>
          <NavbarComponent/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout