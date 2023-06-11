import React from 'react'
import { Link } from 'gatsby'
import { Search } from 'lucide-react'

import { StaticImage } from 'gatsby-plugin-image'
import navLinks from '../utils/nav-links'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <div className='w-full gradientBg'>
      <div className="container flex items-center justify-between py-2 sm:py-0 ">
        <MobileNavbar />
        <Link to='/'>
          <StaticImage
            alt='ماركتنج بالعربي'
            src='../images/logo.png'
            width={129}
            height={106}
            loading='eager'
            layout="constrained"
            className='w-14 h-11 sm:w-32 sm:h-auto'
            placeholder='blurred'
          // __imageData={
          //   {
          //     height : 106,
          //     width : 129,
          //     images : {
          //       fallback : {
          //         src : '../images/logo.png',
          //       }
          //     },
          //     layout : 'constrained',
          //   }
          // }
          />
        </Link>

        <div className="flex items-center gap-x-8 md:gap-x-12 lg:gap-x-14">

          <ul className='hidden sm:flex items-center gap-x-6 md:gap-x-10 '>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className='text-white text-sm md:text-xl md:leading-9'>{link.title}</Link>
                </li>
              ))
            }
          </ul>

          <Search className='text-white cursor-pointer' size={24} />
        </div>

      </div>
    </div>
  )
}

export default Navbar