import React, { ReactNode } from 'react'
import clsx from 'clsx'

type TSectionProps = {
  className?: string
  children: ReactNode
}

const Section = ({ className, children }: TSectionProps) => {
  const defaultClassName =
    'mb-layout rounded-2xl overflow-hidden bg-white shadow-md shadow-gray-200 last:mb-0'
  const allClassNames = clsx(defaultClassName, className)

  return <section className={allClassNames}>{children}</section>
}

export default Section
