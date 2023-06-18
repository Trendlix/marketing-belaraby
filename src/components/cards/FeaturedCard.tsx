import React, { FC } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../../utils/utils'

interface FeaturedCardProps {
  index: number
  title: string
  description: string
  image: any
  imageAlt: string
  currentBlog: number
  setCurrentBlogHandler: (index: number) => void
  imageStyle?: any
  descriptionStyle?: any
  slug: string
}

const FeaturedCard: FC<FeaturedCardProps> = ({ index, currentBlog, setCurrentBlogHandler, title, description, image, imageAlt, imageStyle, descriptionStyle, slug }) => {
  return <Link to={`/blogs/${slug}`}
    onMouseEnter={() => setCurrentBlogHandler(index)}
    className={cn(
      'px-2 sm:px-4 rounded-lg overflow-hidden cursor-pointer',
    )}
  >
    <div className="flex item-center gap-1 sm:gap-2">
      <GatsbyImage
        image={image}
        alt={imageAlt}
        loading='eager'
        sizes='(max-width: 768px) 80px,(max-width: 1280px) 128px,144px'
        className={cn(
          'w-20 md:w-36 md:h-24 rounded-lg border-[3px] border-transparent hover:border-white transition-all',
          imageStyle,
          currentBlog === index && 'border-white'
        )}
      />
      <div className="flex-1 flex flex-col justify-between ml-2 sm:ml-4">
        <p className='line-clamp-1 text-white sm:text-lg sm:leading-8 font-semibold'>
          {title}
        </p>
        <p className={cn('line-clamp-1 sm:line-clamp-5 text-[#CACACA] sm:text-lg', descriptionStyle)}>
          {description}
        </p>
        <div className="flex gap-1 justify-end items-end">
          <p className='text-white text-sm sm:text-base sm:font-medium'>المزيد</p>
          <ArrowLeft className='text-white text-sm sm:text-base' size={18} />
        </div>
      </div>
    </div>
  </Link>
}

export default FeaturedCard