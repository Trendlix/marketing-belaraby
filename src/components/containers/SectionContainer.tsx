import { cn } from '../../utils/utils'
import React, { FC } from 'react'

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  shadow?: boolean
}

const SectionContainer: FC<SectionContainerProps> = ({ children, className, shadow, ...props }) => {
  return <section
    className={cn('container', className, {
      'shadow-main': shadow
    })}
    {...props}
  >
    {children}
  </section>
}

export default SectionContainer