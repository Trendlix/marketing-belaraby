import HorizontalCard from '@/components/cards/HorizontalCard'
import SectionContainer from '@/components/containers/SectionContainer'
import TrendingContainer from '@/components/containers/TrendingContainer'
import { HeadFC } from 'gatsby'
import React, { FC } from 'react'

interface indexProps {

}

const index: FC<indexProps> = ({ }) => {
  return <main className='my-8 sm:my-16'>
    <SectionContainer className='mb-4 sm:mb-8'>
      <div className="grid items-stretch grid-cols-10 gap-x-2 sm:gap-x-4">
        <TrendingContainer className='col-span-5'/> 
        <TrendingContainer  className='col-span-2'/> 
        <TrendingContainer  className='col-span-3'/> 
      </div>
    </SectionContainer>
    <SectionContainer >
      <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4">
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
        <HorizontalCard shadow={true} />
      </div>
    </SectionContainer>
  </main>
}

export default index
export const Head: HeadFC = () => <title>Facebook</title>