import React from 'react'
import clsx from 'clsx'

type TErrorProps = {
  error: string
  className?: string
}

const Error = ({ error, className }: TErrorProps) => {
  const defaultClassName = 'text-sm text-red-500'
  const allClassNames = clsx(defaultClassName, className)

  return <p className={allClassNames}>{error}</p>
}

export default Error
