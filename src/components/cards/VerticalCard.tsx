import { Link } from 'gatsby'
import { cn } from '../../utils/utils'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

interface IVerticalCardProps {
  shadow?: boolean
  title?: string
  category?: string
  slug?: string
  description?: string
  image?: any
  imageAlt: string
  createdAt: string
}
const VerticalCard = ({ shadow = false, title, description, category, image, imageAlt, slug, createdAt }: IVerticalCardProps) => {
  return (
    <Link to={`/blogs/${slug}`} className={
      cn('bg-white p-2 sm:p-4 rounded-lg overflow-hidden',
        { 'shadow-main': shadow }
      )
    }
    >
      <div className="relative">
        <GatsbyImage
          image={image}
          alt={imageAlt}
          loading='eager'
          className='w-full h-[86px] sm:h-48 rounded-lg'
          sizes='100%'
        />
        <div className="absolute categoryGradientBg px-5 py-1 top-2 right-2 rounded-md">
          <p className='text-white text-sm sm:text-base'>{category}</p>
        </div>
      </div>
      <div className='flex flex-col mt-2 sm:mt-4'>
        <div className="flex items-center justify-between">
          <p className='text-gray-600 text-xs sm:text-sm sm:font-medium'>{category}</p>
          <p className='text-gray-600 text-xs sm:text-sm sm:font-medium'>
            {new Date(createdAt).toLocaleDateString('ar-EG-u-nu-latn', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
            )}
          </p>
        </div>
        <p className='line-clamp-2 text-black text:lg sm:text-2xl my-1 sm:my-2 font-semibold'>{title}</p>
        <p className='text-black/60 line-clamp-4 text-xs sm:text-sm'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export default VerticalCard