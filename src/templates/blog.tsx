import React, { FC } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import SectionContainer from '@/components/containers/SectionContainer'
import HorizontalCard from '@/components/cards/HorizontalCard'
import VerticalCard from '@/components/cards/VerticalCard'
import { HeadFC, graphql, useStaticQuery } from 'gatsby'
import { SEO } from '@/components/SEO'
import { PortableText } from '@portabletext/react'
import MyPortableText from '@/components/PortablText'
// import MyPortableText from '@/components/PortablText'

interface blogProps {
  data: Queries.Query
}
export const postQuery = graphql`
  query SingleBlogQuery($id: String!, $categories : [String]!) {
    sanityBlog(id :{eq : $id} ) {
      _id
      title
      description
      _createdAt
      _rawBody
      slug {
        current
      }
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        name
      }
    }
    allSanityTrending(
      limit: 4
      sort: {_createdAt: DESC}
      filter: {category: {name: {in: $categories}}, blog: {id: {ne: $id}}}
    ) {
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
    allSanityBlog(limit: 6, sort: {_createdAt: DESC} , filter : {
      id: { ne: $id} 
    }){
      nodes {
        title
        description
        _createdAt
        slug {
          current
        }
        categories {
          name
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
`;

const blog: FC<blogProps> = ({ data }) => {

  const blog = data?.sanityBlog as Queries.SanityBlog;
  const trendingBlogs = data?.allSanityTrending.nodes as Queries.SanityTrending[];
  const featuredBlogs = data?.allSanityFeatured.nodes[0].blog as Queries.SanityBlog[];
  const restBlogs = data?.allSanityBlog.nodes as Queries.SanityBlog[];

  return <main className='py-8'>
    <SectionContainer>
      <div className="flex items-center justify-center gap-8 sm:gap-12 sm:justify-start">
        <p className='text-gray-500'>
          {blog?.categories?.map((category: any, index: number) => {
            return <span className='mx-4' key={category?.name + index}>{category.name}</span>
          })}
        </p>
        <p className='text-gray-500'>
          {new Date(blog._createdAt as string).toLocaleDateString('ar-EG-u-nu-latn', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
          )}
        </p>
      </div>
      <h1 className='mt-4 sm:max-w-[66.6667%] text-2xl sm:text-3xl  font-bold'>{blog.title}</h1>

      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:col-span-8">
          <div className="relative my-6 sm:my-8 ">
            <GatsbyImage
              image={blog?.coverImage?.asset?.gatsbyImageData as any}
              alt={blog?.coverImage?.alt as string}
              className='rounded-lg'
              loading="lazy"
            />
            <div className="absolute categoryGradientBg px-5 py-1 top-2 right-2 rounded-md">
              <p className='text-white text-sm sm:text-base'>{blog.categories && blog?.categories[0]?.name}</p>
            </div>
          </div>
          <div className="">
            {/* <PortableText value={blog._rawBody} /> */}
            <MyPortableText value={blog._rawBody} />
          </div>
          {/* <p className='text-gray-500'>لقد تسبب غزو روسيا لأوكرانيا في قلق عالمي، الأمر الذي وضع القوة العسكرية العظمى في العالم على خلاف مرة أخرى، وربما فرض التدخل الذي قد يؤدي إلى واحد من أكبر الصراعات في عقود من الزمان.
            وخلافا لحوادث مماثلة وقعت في الماضي، فإن هذه المعركة تدور رحاها في عصر وسائل التواصل الاجتماعي، حيث تضيف المذكرات، والحملات الإعلامية المضللة، والاحتيال، كلها إلى دوامة المعلومات المتزايدة، التي يمكن أن تربك، وتزعزع وتسحق ما يحدث فعلا في منطقة أوروبا الشرقية.
            ونظرا لهذا، والدور الذي تلعبه وسائل الإعلام الاجتماعية الآن في نشر المعلومات، فإن هذه المنصات تحتاج إلى العمل السريع للحد من أي إساءة لاستخدام شبكتها لغرض مشكوك فيه، وقد استنت العديد منها بالفعل خططا لتخفيف بعض عناصر إساءة الاستخدام والمعلومات المضللة.هنا نظرة إلى ما تم الإعلان عنه حتى الآن من التطبيقات الاجتماعية الرئيسية.
            Meta
          </p>
          <p className='text-gray-500'>لقد تسبب غزو روسيا لأوكرانيا في قلق عالمي، الأمر الذي وضع القوة العسكرية العظمى في العالم على خلاف مرة أخرى، وربما فرض التدخل الذي قد يؤدي إلى واحد من أكبر الصراعات في عقود من الزمان.
            وخلافا لحوادث مماثلة وقعت في الماضي، فإن هذه المعركة تدور رحاها في عصر وسائل التواصل الاجتماعي، حيث تضيف المذكرات، والحملات الإعلامية المضللة، والاحتيال، كلها إلى دوامة المعلومات المتزايدة، التي يمكن أن تربك، وتزعزع وتسحق ما يحدث فعلا في منطقة أوروبا الشرقية.
            ونظرا لهذا، والدور الذي تلعبه وسائل الإعلام الاجتماعية الآن في نشر المعلومات، فإن هذه المنصات تحتاج إلى العمل السريع للحد من أي إساءة لاستخدام شبكتها لغرض مشكوك فيه، وقد استنت العديد منها بالفعل خططا لتخفيف بعض عناصر إساءة الاستخدام والمعلومات المضللة.هنا نظرة إلى ما تم الإعلان عنه حتى الآن من التطبيقات الاجتماعية الرئيسية.
            Meta
          </p> */}

        </div>
        <div className="hidden sm:block sm:col-span-4">
          <div className="flex gap-8 items-end">
            <div className="flex-1 h-[3px] bg-black rounded-md"></div>
            <p className='text-black text-2xl font-bold'>أهم الأخبار</p>
          </div>
          <div className="flex flex-col gap-6 mt-3">
            {
              featuredBlogs.map((blog: any, index: number) => {
                return <HorizontalCard
                  key={blog?.slug?.current + index}
                  title={blog?.title}
                  description={blog?.description}
                  slug={blog?.slug?.current}
                  image={blog?.coverImage?.asset?.gatsbyImageData}
                  imageAlt={blog?.coverImage?.alt}
                  imageStyle='!w-32 !h-32'
                  descriptionStyle='!line-clamp-1'
                  shadow={true}
                />
              })
            }
          </div>
          <div className="flex gap-8 items-end my-3">
            <p className='text-black text-2xl font-bold'>رائج الان</p>
            <div className="flex-1 h-[3px] bg-black rounded-md"></div>
          </div>
          <div className="flex flex-col gap-6">
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
      </div>
      <div className="">
        <h3 className='text-2xl font-bold text-center my-4 sm:my-6'>إقراء أيضا</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {
            restBlogs.map((blog: any, index: number) => {
              return <VerticalCard
                key={blog?.slug?.current + index}
                title={blog?.title}
                description={blog?.description}
                slug={blog?.slug?.current}
                image={blog?.coverImage?.asset?.gatsbyImageData}
                imageAlt={blog?.coverImage?.alt}
                createdAt={blog?._createdAt}
                category={blog?.categories[0]?.name}
                shadow={true}
              />
            })
          }
        </div>
      </div>
    </SectionContainer>
  </main>
}

export default blog


export const Head: HeadFC<any> = ({ data }) => {
  const blog = data?.sanityBlog as Queries.SanityBlog;
  return <SEO
    title={blog.title}
    description={blog.description}
    image={blog?.coverImage?.asset?.gatsbyImageData?.images?.fallback?.src}
    imageAlt={blog?.coverImage?.alt}
    categories={blog?.categories?.map((category: any) => category.name)}
    article={true}
    locale={'ar'}
    publishedTime={blog?._createdAt}
    pathname={`/blogs/${blog?.slug?.current}`}
  />
}