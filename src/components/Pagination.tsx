import { cn } from '@/utils/utils'
import { Link } from 'gatsby'
import { StepBack, StepForward } from 'lucide-react'
import React, { FC } from 'react'

interface PaginationProps {
  baseURL: string
  numberOfPages: number
  currentPage: number
}

const Pagination: FC<PaginationProps> = ({ baseURL, numberOfPages, currentPage }) => {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return <div className='flex items-center justify-center gap-4'>
    <Link
      to={`${baseURL}/${nextPage}`}
      className={cn(currentPage >= numberOfPages && 'cursor-not-allowed pointer-events-none')}
    >
      <div className={
        cn(
          "bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center",
          currentPage >= numberOfPages && 'bg-gray-300 cursor-not-allowed pointer-events-none disabled'
        )
      }
      >
        <StepForward className={cn(
          'text-gray-900 w-5 h-5',
          currentPage >= numberOfPages && 'text-gray-400'
        )}
          size={20} />
        <p className={cn(
          'text-gray-900 text-center',
          currentPage >= numberOfPages && 'text-gray-400'
        )}
        >التالي</p>
      </div>
    </Link >
    <p className='text-gray-600'>
      {currentPage} من {numberOfPages}
    </p>
    <Link
      to={`${baseURL}/${prevPage}`}
      className={cn(currentPage <= 1 && 'cursor-not-allowed pointer-events-none')}
    >
      <div className={
        cn(
          "bg-gray-600 w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center",
          currentPage <= 1 && 'bg-gray-300 cursor-not-allowed pointer-events-none disabled'
        )
      }
      >
        <StepBack className={cn(
          'text-gray-900 w-5 h-5',
          currentPage <= 1 && 'text-gray-400'
        )}
          size={20} />
        <p className={cn(
          'text-gray-900 text-center',
          currentPage <= 1 && 'text-gray-400'
        )}
        >
          السابق</p>
      </div>
    </Link>

  </div >
}

export default Pagination