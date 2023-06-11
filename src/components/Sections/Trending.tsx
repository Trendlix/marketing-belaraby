import React, { FC } from 'react'
import { PageProps, graphql, useStaticQuery } from 'gatsby'
import SectionContainer from '../containers/SectionContainer'
import VerticalCard from '../cards/VerticalCard'

interface TrendingProps {

}
interface ITrending {
  slug: string
  title: string
  category: string
  description: string
}

const Trending: FC<TrendingProps> = ({ }) => {
  const getTrendingBlog = () => {
    const data = useStaticQuery(graphql`
    {
      allSanityTrending(limit: 4, sort: {_createdAt: DESC}) {
        nodes {
          blog {
            title
            description
            _createdAt
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
          category {
            name
          }
        }
      }
    }
  `)
    const blogs = data.allSanityTrending.nodes
    return blogs
  }
  const blogs = getTrendingBlog();


  return <SectionContainer className="py-8 px-2 sm:px-4 rounded-lg" shadow={true}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-y-1">
      {blogs.map((blog: any , index : number) => {
        return <VerticalCard
          key={blog.blog.slug.current + index}
          title={blog.blog.title}
          description={blog.blog.description}
          category={blog.category.name}
          slug={blog.blog.slug.current}
          createdAt={blog.blog._createdAt}
          image={blog.blog.coverImage.asset.gatsbyImageData}
          imageAlt = {blog.blog.coverImage.alt}
        />
      }
      )}
    </div>
  </SectionContainer>
}

export default Trending