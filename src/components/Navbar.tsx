import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Search } from 'lucide-react'

import { StaticImage } from 'gatsby-plugin-image'
// import navLinks from '../utils/nav-links'
import MobileNavbar from './MobileNavbar'


const Navbar = () => {
  // static query
  const data = useStaticQuery(graphql`
  {
    allSanityActiveNavlinks(filter: {_id: {eq: "activeNavlinks"}}) {
      nodes {
        category {
          _id
          slug {
            current
          }
          name
        }
      }
    }
  }
  `)

  const navLinks = data.allSanityActiveNavlinks.nodes[0].category
  return (
    <header className='w-full gradientBg'>
      <div className="container flex items-center justify-between gap-4 py-4 sm:py-4">
        <MobileNavbar navLinks={navLinks}/>
        <Link to='/'>
          <StaticImage
            alt='ماركتنج بالعربي'
            src='../images/logo.png'
            width={187}
            height={58}
            loading='eager'
            layout="fixed"
            className='w-24 h-7 sm:w-48 sm:h-auto'
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
            <li >
              <Link to='/' className='text-white text-sm md:text-xl md:leading-9'>
                الرئيسية
              </Link>
            </li>
            {
              navLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link to={`/${link.slug.current}`} className='text-white text-sm md:text-xl md:leading-9'>{link.name}</Link>
                </li>
              ))
            }
          </ul>

          <Search className='text-white cursor-pointer' size={24} />
        </div>

      </div>
    </header>
  )
}

export default Navbar