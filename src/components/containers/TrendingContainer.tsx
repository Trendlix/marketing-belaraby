import React, { FC } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { cn } from '@/utils/utils'

interface TrendingContainerProps {
  slug: string
  title: string
  image: any
  imageAlt: string
  className?: string
}

const TrendingContainer: FC<TrendingContainerProps> = ({ slug, title, image, imageAlt, className }) => {
  return <Link to={slug} className={
    cn('relative w-full h-full rounded-lg overflow-hidden cursor-pointer group', className)
  }>
    {/* <div className="absolute inset-0 bg-black/50"> */}
    <GatsbyImage
      image={image}
      alt={imageAlt}
      className='h-full'
      loading='lazy'
    />
    {/* </div> */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-black/40 to-black 
      group-hover:from-black group-hover:via-black/70 group-hover:to-black duration-1000
    flex flex-col justify-end group-hover:justify-center items-center py-6 sm:py-10 sm:px-4 transition-all">
      <p className='group-hover:hidden block text-white text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold duration-200 text-center'>
        {title}
      </p>
      <p className='pointer-events-none hidden text-white group-hover:block group-hover:pointer-events-auto duration-200 text-sm sm:text-lg md:text-xl lg:text-3xl font-semibold'>تصفح المزيد</p>
    </div>
  </Link>
}

export default TrendingContainer