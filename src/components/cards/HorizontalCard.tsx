import React, { FC } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../../utils/utils'
// import img from '@/images/v-card.png'

interface HorizontalCardProps {
  shadow?: boolean
  title: string
  slug: string
  description: string
  image: any
  imageAlt: string
  imageStyle?: any
  descriptionStyle?: any
}

const HorizontalCard: FC<HorizontalCardProps> = ({ shadow = false, title, description, image, imageAlt, slug, imageStyle, descriptionStyle }) => {
  return <Link to={`/blogs/${slug}`} className={
    cn('group bg-white p-2 sm:p-4 rounded-lg overflow-hidden hover:z-10 hover:bg-primary transition-all duration-300',
      { 'shadow-main': shadow }
    )
  }>
    <div className="flex item-center gap-2 sm:gap-4">
      <GatsbyImage
        image={image}
        alt={imageAlt}
        loading='eager'
        sizes='(max-width: 768px) 80px,(max-width: 1280px) 128px,256px'
        className={cn('w-20 md:w-32 xl:w-64 rounded-lg aspect-square', imageStyle)}
      />
      <div className="flex-1 flex flex-col justify-between ml-2 sm:ml-4">
        <p className='line-clamp-2 text-black text:lg sm:text-2xl my-1 sm:my-2 font-semibold group-hover:text-white duration-300'>
          {title}
        </p>
        <p className={cn('line-clamp-1 sm:line-clamp-5 text-black/70 sm:text-lg group-hover:text-white duration-300', descriptionStyle)}>
          {description}
        </p>
        <div className="flex gap-1 justify-end sm:justify-start items-end ">
          <p className='text-black text-sm sm:text-lg sm:font-medium group-hover:text-white duration-300'>المزيد</p>
          <ArrowLeft className='text-black text-sm sm:text-lg group-hover:text-white duration-300' size={20} />
        </div>
      </div>
    </div>
  </Link>
}

export default HorizontalCard