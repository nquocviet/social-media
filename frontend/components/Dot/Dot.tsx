import React from 'react'
import clsx from 'clsx'

type TDotColors = 'primary' | 'neutral' | 'error' | 'warning' | 'success'

type TDotProps = {
  size?: number
  color?: TDotColors
  className?: string
}

const dotColors = {
  primary: 'bg-primary-500',
  neutral: 'bg-neutral-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
}

const Dot = ({ size = 4, color = 'neutral', className }: TDotProps) => {
  const defaultClassName = 'inline-block h-dot w-dot rounded-full'
  const allClassNames = clsx(defaultClassName, dotColors[color], className)

  return (
    <span
      className={allClassNames}
      style={{ ['--dot-size' as any]: `${size}px` }}
    ></span>
  )
}

export default Dot
