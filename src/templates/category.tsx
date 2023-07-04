import React, { FC } from 'react'
import { HeadFC, graphql } from 'gatsby'

import Pagination from '@/components/Pagination'
import HorizontalCard from '@/components/cards/HorizontalCard'
import SectionContainer from '@/components/containers/SectionContainer'
import TrendingContainer from '@/components/containers/TrendingContainer'
import { cn, getCategoryLink } from '@/utils/utils'
import { SEO } from '@/components/SEO'

interface indexProps {
  data: Queries.Query
  pageContext: {
    limit: number
    offset: number
    currentPage: number
    numberOfPages: number
    category: string
  }
}
export const query = graphql`
query blogListQuery($limit: Int!, $offset: Int!, $category: String!) {
  allSanityBlog(
    sort: {_createdAt: DESC} ,
    limit: $limit,
    skip: $offset,
    filter: {categories: {elemMatch: {name: {eq: $category}}}}
    ) {
    nodes {
      slug {
        current
      }
      title
      description
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
  allSanityTrending(
    sort: {_createdAt: DESC}
    limit: 3,
    filter: {category: {name: {eq: $category}}}
    ) {
    nodes {
      blog {
        title
        slug {
          current
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`
const index: FC<indexProps> = ({ data, pageContext }) => {
  const { category, currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes
  const trendingBlogs = data.allSanityTrending.nodes

  return <main className='my-8 sm:my-16'>
    <SectionContainer className='mb-4 sm:mb-8'>
      <div className="grid items-stretch grid-cols-10 gap-x-2 sm:gap-x-4">
        {
          trendingBlogs.map((blog: any, index: number) => {
            return <TrendingContainer
              key={blog?.blog?.slug?.current + index}
              title={blog?.blog?.title}
              slug={`/blogs/${blog?.blog?.slug?.current}`}
              image={blog?.blog?.coverImage?.asset?.gatsbyImageData}
              imageAlt={blog?.blog?.coverImage?.alt}
              className={cn(
                'max-h-72 sm:max-h-[524px]',
                index === 0 && 'col-span-5',
                index === 1 && 'col-span-2',
                index === 2 && 'col-span-3'
              )
              }
            />
          })
        }
      </div>
    </SectionContainer>
    <SectionContainer >
      <div className="flex flex-col items-stretch justify-center gap-y-2 sm:gap-y-4">
        {blogs.map((blog: any, index: number) => {
          return <HorizontalCard
            key={blog?.slug?.current + index}
            title={blog?.title}
            description={blog?.description}
            slug={blog?.slug?.current}
            image={blog?.coverImage?.asset?.gatsbyImageData}
            imageAlt={blog?.coverImage?.alt}
            shadow={true}
          />
        }
        )}
        {
          numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL={`${getCategoryLink(category)}`}
            />
          )
        }
      </div>
    </SectionContainer>
  </main>
}

export default index
export const Head: HeadFC<indexProps> = props => {
  const { data, pageContext } = props as any;
  const { category, currentPage } = pageContext;
  return <SEO
    title={`ماركتنج بالعربي | ${category}`}
    locale={'ar'}
    pathname={`${getCategoryLink(category)}/${currentPage}`}
  />
}