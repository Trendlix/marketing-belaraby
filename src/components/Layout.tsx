import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <div dir="rtl">
    <Navbar />
    {children}
    <Footer />
  </div>
}

export default Layout