import React from 'react'
import clsx from 'clsx'

type TDividerProps = {
  className?: string
}

const Divider = ({ className }: TDividerProps) => {
  const defaultClassName = 'h-px w-full border-b border-gray-200'
  const allClassNames = clsx(defaultClassName, className)

  return <div className={allClassNames}></div>
}

export default Divider
