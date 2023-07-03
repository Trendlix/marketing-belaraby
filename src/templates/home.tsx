import * as React from "react"
import { type HeadFC, graphql } from "gatsby"

import VerticalCard from "../components/cards/VerticalCard"
import SectionContainer from "../components/containers/SectionContainer"
import HorizontalCard from "@/components/cards/HorizontalCard"
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "@/components/SEO"
import Trending from "@/components/Sections/Trending"
import Featured from "@/components/Sections/Featured"
import Pagination from "@/components/Pagination"

interface PageProps {
  data: Queries.Query
  pageContext: {
    limit: number
    offset: number
    currentPage: number
    numberOfPages: number
  }
}
export const query = graphql`
query blogListQuery($limit: Int!, $offset: Int!) {
  allSanityBlog(
    sort: {_createdAt: DESC} ,
    limit: $limit,
    skip: $offset
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
  allSanityTrending(skip: 4, sort: {_createdAt: DESC}) {
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
const IndexPage: React.FC<PageProps> = ({ data, pageContext }) => {
  const { currentPage, numberOfPages } = pageContext;
  const allBlogs = data?.allSanityBlog.nodes
  const trendingBlogs = data?.allSanityTrending.nodes
  const featuredBlogs = data?.allSanityFeatured?.nodes[0].blog as Queries.SanityBlog[]

  return (
    <main className="py-8">
      <Featured blogs={featuredBlogs} />
      <Trending />
      <SectionContainer className="">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-y-2 md:gap-4">
          <div className="order-last sm:order-first col-span-3 flex flex-col gap-2 md:gap-4">
            {
              allBlogs.map((blog: any) => {
                return <HorizontalCard
                  key={blog.slug.current}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug.current}
                  image={blog?.coverImage?.asset?.gatsbyImageData}
                  imageAlt={blog.coverImage.alt}
                  shadow={true}
                />
              }
              )}
          </div>
          <div className="col-span-1 flex flex-col gap-2 md:gap-4">
            {/* <StaticImage
              src='../images/ad-1.png'
              alt='ماركتنج بالعربي'
              className='rounded-lg'
              loading="lazy"
              placeholder="blurred"
            /> */}
            {
              trendingBlogs.map((blog: any, index: number) => {
                return <VerticalCard
                  key={blog?.blog?.slug?.current + index}
                  title={blog?.blog?.title}
                  description={blog?.blog?.description}
                  category={blog?.category?.name}
                  slug={blog?.blog?.slug?.current}
                  createdAt={blog?.blog?._createdAt}
                  image={blog?.blog?.coverImage?.asset?.gatsbyImageData}
                  imageAlt={blog?.blog?.coverImage?.alt}
                  shadow={true}
                />
              })
            }

          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="mt-8">
        {
          numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL=""
            />
          )
        }
      </SectionContainer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO
  title="ماركتنج بالعربي | Marketing Bel Araby"
  pathname="/"
/>
