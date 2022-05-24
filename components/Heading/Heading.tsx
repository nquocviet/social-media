import React, { ReactNode } from 'react'
import clsx from 'clsx'

type THeadingProps = {
  children: ReactNode
  level?: number
  className?: string
}

const Heading = ({ children, level = 2, className }: THeadingProps) => {
  const defaultClassName = 'font-bold capitalize'
  const allClassNames = clsx(defaultClassName, className)
  const headingTag = `h${level}`

  return React.createElement(headingTag, { className: allClassNames }, children)
}

export default Heading
