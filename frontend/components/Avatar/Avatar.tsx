import React from 'react'
import clsx from 'clsx'
import { ImageRatio } from '../ImageRatio'

type TAvatarRounded = 'sm' | 'md' | 'lg' | 'full'

type TAvatarProps = {
  size?: number
  src: string
  alt: string
  rounded?: TAvatarRounded
  className?: string
}

const avatarRoundedStyles = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const Avatar = ({
  size = 40,
  src,
  alt,
  rounded = 'full',
  className,
}: TAvatarProps) => {
  const defaultClassName = 'relative w-avatar flex-shrink-0'
  const allClassNames = clsx(
    defaultClassName,
    avatarRoundedStyles[rounded],
    className
  )

  return (
    <ImageRatio
      className={allClassNames}
      src={src}
      alt={alt}
      style={{
        ['--avatar-size' as any]: `${size}px`,
      }}
    />
  )
}

export default Avatar
