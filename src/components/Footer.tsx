import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Cloud from './icons/Cloud'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
// import navLinks from '../utils/nav-links'

const Footer = () => {
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
    <footer className='relative w-full gradientBg pt-8 sm:pt-12'>
      <div className="absolute inset-0 bg-black/90">
        <StaticImage
          alt='ماركتنج بالعربي'
          src='../images/footer-bg.png'
          width={1920}
          height={1080}
          loading='eager'
          layout="fullWidth"
          className='w-full h-full filter grayscale brightness-[0.1]'
          placeholder='blurred'
        />

      </div>
      <div className="relative w-10/12 sm:w-9/12 mx-auto">

        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-center gap-8 sm:gap-12 py-3 sm:py-4 ">
          {/* <div className="flex gap-4"></div> */}
          <div className="flex items-center justify-between gap-4">
            <Twitter className='text-white hover:text-secondary duration-300 cursor-pointer' size={32} />
            <Linkedin className='text-white hover:text-secondary duration-300 cursor-pointer' size={32} />
            <Instagram className='text-white hover:text-secondary duration-300 cursor-pointer' size={32} />
            <Facebook className='text-white hover:text-secondary duration-300 cursor-pointer' size={32} />
          </div>
          <Link to='/'>
            <StaticImage
              alt='ماركتنج بالعربي'
              src='../images/logo.png'
              width={187}
              height={58}
              loading='eager'
              layout="constrained"
              className='w-28 h-auto sm:w-48 sm:h-auto'
              sizes='(max-width: 768px) 56px, 96px'
            />
          </Link>

          {/* <ul className='hidden sm:flex items-center gap-x-6 md:gap-x-10 '>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.link} className='text-white text-sm md:text-xl md:leading-9'>{link.title}</Link>
              </li>
            ))
          }
        </ul> */}
        </div>
        <ul className='flex items-center justify-between gap-x-6 md:gap-x-10 '>
          <li >
            <Link to='/' className='text-white text-sm md:text-xl md:leading-9 underline hover:text-secondary duration-300'>
              الرئيسية
            </Link>
          </li>
          {
            navLinks.map((link: any, index: number) => (
              <li key={index}>
                <Link to={`/${link.slug.current}`} className='text-white text-sm md:text-xl md:leading-9 underline hover:text-secondary duration-300'>
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="flex flex-col sm:flex-row gap-8 items-start justify-between py-10 sm:py-12">
          <div className="">
            <p className='text-white mb-4 font-semibold'>للتواصل هاتفيا أو عبر البريد</p>
            <div className="flex items-center gap-2 sm:gap-4">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.25 7.625C7.25 5.73938 7.25 4.79657 7.83579 4.21079C8.42157 3.625 9.36438 3.625 11.25 3.625H17.75C19.6356 3.625 20.5784 3.625 21.1642 4.21079C21.75 4.79657 21.75 5.73938 21.75 7.625V21.375C21.75 23.2606 21.75 24.2034 21.1642 24.7892C20.5784 25.375 19.6356 25.375 17.75 25.375H11.25C9.36438 25.375 8.42157 25.375 7.83579 24.7892C7.25 24.2034 7.25 23.2606 7.25 21.375V7.625ZM11.584 6.04167C11.584 5.76553 11.8078 5.54167 12.084 5.54167H16.9173C17.1935 5.54167 17.4173 5.76553 17.4173 6.04167C17.4173 6.31781 17.1935 6.54167 16.9173 6.54167H12.084C11.8078 6.54167 11.584 6.31781 11.584 6.04167ZM14.4993 22.9583C15.1667 22.9583 15.7077 22.4173 15.7077 21.75C15.7077 21.0827 15.1667 20.5417 14.4993 20.5417C13.832 20.5417 13.291 21.0827 13.291 21.75C13.291 22.4173 13.832 22.9583 14.4993 22.9583Z" fill="#B8B8B8" />
              </svg>
              <p className='text-[#818181]'>+201012877474</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.3327 14.2083C28.3327 10.5801 28.3327 8.76605 27.3777 7.46289C26.9642 6.89874 26.433 6.41436 25.8142 6.03741C24.385 5.16667 22.3953 5.16667 18.416 5.16667H15.5827C11.6034 5.16667 9.61372 5.16667 8.18445 6.03741C7.56571 6.41436 7.03445 6.89874 6.62102 7.46289C5.66602 8.76605 5.66602 10.5801 5.66602 14.2083C5.66602 17.8365 5.66602 19.6506 6.62102 20.9538C7.03445 21.5179 7.56571 22.0023 8.18445 22.3793C9.43303 23.1399 11.1093 23.2361 14.166 23.2482V23.25L15.7322 26.1061C16.2543 27.0581 17.7444 27.0581 18.2665 26.1061L19.8327 23.25V23.2482C22.8894 23.2361 24.5657 23.1399 25.8142 22.3793C26.433 22.0023 26.9642 21.5179 27.3777 20.9538C28.3327 19.6506 28.3327 17.8365 28.3327 14.2083ZM12.75 10.625C12.1977 10.625 11.75 11.0727 11.75 11.625C11.75 12.1773 12.1977 12.625 12.75 12.625H21.25C21.8023 12.625 22.25 12.1773 22.25 11.625C22.25 11.0727 21.8023 10.625 21.25 10.625H12.75ZM12.75 15.7917C12.1977 15.7917 11.75 16.2394 11.75 16.7917C11.75 17.344 12.1977 17.7917 12.75 17.7917H17C17.5523 17.7917 18 17.344 18 16.7917C18 16.2394 17.5523 15.7917 17 15.7917H12.75Z" fill="url(#paint0_linear_519_4396)" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_519_4396" x1="25.9401" y1="5.16667" x2="-6.48778" y2="17.0238" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#505050" />
                  </linearGradient>
                </defs>
              </svg>
              <p className='text-[#818181]'>info@marketingbelaraby.com</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2 sm:gap-4">
              <p className='text-white sm:text-lg font-bold'>اشترك في اخبارنا</p>
              <Cloud />
            </div>
            <p className='text-[#908F8F] mt-2'>كن الاول في الحصول علي اخبارنا و الاعلانات</p>
            <div className="mt-2 sm:mt-4 flex items-center gap-4">
              <input
                type="text"
                placeholder='ادخل بريدك الالكتروني'
                className='w-full h-10 sm:h-12 rounded-md px-4 sm:px-6 text-sm sm:text-base outline-none focus:ring focus:ring-primary focus:border-primary bg-transparent border-[#B3B3B3] border-2 duration-300'
              />
              <button className='px-4 py-2 bg-primary text-white rounded-md whitespace-nowrap'>
                اشترك الان
              </button>
            </div>
          </div>
        </div>
        <p className='text-center text-white pb-6 pt-2 sm:py-6'>كل الحقوق محفوظة لماركتينج بالعربي © 2023</p>
      </div>

    </footer>
  )
}

export default Footer