import React from 'react'
import { Link } from 'gatsby';
import { Menu } from 'lucide-react'

import navLinks from '../utils/nav-links';

const MobileNavbar = () => {
  const [navShow, setNavShow] = React.useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <Menu className='block sm:hidden text-white cursor-pointer' size={24} />
      </button>
      <div
        className={`fixed top-0 right-0 z-10 h-full w-4/5 transform gradientBg opacity-95 duration-300 ease-in-out ${navShow ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex h-[60px] items-center">
          <button
            type="button"
            className="mr-5 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-white"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed h-full w-full">
          {navLinks.map((link) => (
            <div key={link.title} className="w-full px-8 py-4 border-2 border-white/30">
              <Link
                to={link.link}
                className="text-lg font-bold tracking-widest text-white"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNavbar;
