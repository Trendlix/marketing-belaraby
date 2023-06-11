import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import navLinks from '../utils/nav-links'

const Footer = () => {
  return (
    <div className='w-full gradientBg'>
      <div className="w-10/12 sm:w-9/12 mx-auto flex items-center justify-center sm:justify-between py-3 sm:py-4 ">
        <Link to='/'>
          <StaticImage
            alt='ماركتنج بالعربي'
            src='../images/logo.png'
            width={96}
            height={86}
            loading='eager'
            layout="constrained"
            className='w-14 h-11 sm:w-24 sm:h-auto'
            sizes='(max-width: 768px) 56px, 96px'
          />
        </Link>
        <ul className='hidden sm:flex items-center gap-x-6 md:gap-x-10 '>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.link} className='text-white text-sm md:text-xl md:leading-9'>{link.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer