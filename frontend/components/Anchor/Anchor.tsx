import React, { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type TAnchorProps = {
  href: string
  children: ReactNode
  className?: string
  target?: string
}

const Anchor = ({
  href,
  className,
  children,
  target = '_self',
}: TAnchorProps) => {
  const defaultClassName =
    'inline-flex items-center text-primary-600 hover:text-primary-700'
  const allClassNames = clsx(defaultClassName, className)

  return (
    <Link href={href}>
      <a className={allClassNames} target={target}>
        {children}
      </a>
    </Link>
  )
}

export default Anchor
