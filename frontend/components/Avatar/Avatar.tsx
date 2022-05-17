import clsx from 'clsx'
import React from 'react'

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
  const defaultClassName = 'relative w-avatar'
  const allClassNames = clsx(
    defaultClassName,
    avatarRoundedStyles[rounded],
    className
  )

  return (
    <div
      className={allClassNames}
      style={{
        ['--aspect-ratio' as any]: '1',
        ['--avatar-size' as any]: `${size}px`,
      }}
    >
      <img src={src} alt={alt} />
    </div>
  )
}

export default Avatar
