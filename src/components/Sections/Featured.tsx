import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { FC, useCallback, useEffect, useState } from 'react'
import SectionContainer from '../containers/SectionContainer'
import { ArrowLeft } from 'lucide-react'
import FeaturedCard from '../cards/FeaturedCard'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface FeaturedProps {
  blogs: Queries.SanityBlog[]
}
const postQuery = graphql`
query{
  allSanityFeatured(filter: {_id: {eq: "featuredItems"}}) {
    nodes {
      blog {
        title
        description
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }
  }
}
`
const Featured: FC<FeaturedProps> = ({ blogs }) => {
  const [currentBlog, setCurrentBlog] = useState<Queries.SanityBlog>(blogs[2])
  const changeBlogHandler = useCallback((index: number) => {
    setCurrentBlog(blogs[index])
  }, [blogs])
  return <>
    <SectionContainer className='relative rounded-lg mt-4 mb-12 py-8 px-6 md:px-12 sm:py-12 overflow-hidden' shadow={true}>
      <GatsbyImage
        image={currentBlog?.coverImage?.asset?.gatsbyImageData as IGatsbyImageData}
        alt={currentBlog?.coverImage?.alt as string}
        className='absolute inset-0 w-full h-full rounded-lg bg-black/50'
      />
      <div className="absolute inset-0 bg-black/50">
      </div>
      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-8 h-full">
          <div className="h-full flex flex-col justify-center gap-6">
            <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl sm:leading-10 lg:leading-[3.2rem] line-clamp-2 '>{currentBlog?.title}</h1>
            <div className="flex items-end justify-between gap-4">
              <p className='text-[#BEBEBE] text-lg sm:text-xl xl:text-2xl line-clamp-2'>{currentBlog?.description}</p>
              <div className="flex gap-1 justify-end sm:justify-start items-end">
                <Link to={`/blogs/${currentBlog?.slug?.current}`} className='text-white text-sm sm:text-lg sm:font-medium'>المزيد</Link>
                <ArrowLeft className='text-white text-sm sm:text-lg' size={20} />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            {
              blogs.map((blog: any, index: number) => {
                return <FeaturedCard
                  index={index}
                  key={blog.slug.current + index}
                  title={blog.title}
                  description={blog.description}
                  image={blog.coverImage.asset.gatsbyImageData}
                  imageAlt={blog.coverImage.alt}
                  imageStyle='!w-32'
                  descriptionStyle='!line-clamp-1'
                  setCurrentBlogHandler={changeBlogHandler}
                />
              })
            }
          </div>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer className='my-8'>
      <div className="lg:hidden flex items-center justify-center gap-4 sm:gap-8">
        {
          blogs.map((blog: any, index: number) => {
            return <span
              key={blog.slug.current + index}
              onClick={() => changeBlogHandler(index)}
            >
              <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className='w-16 h-12 sm:w-28 sm:h-20 rounded-lg cursor-pointer'
              />
            </span>
          })
        }
      </div>
    </SectionContainer>
  </>
}

export default Featured