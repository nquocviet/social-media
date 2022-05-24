import clsx from 'clsx'
import React from 'react'

type TStyles = {
  [key: string]: any
}

type TImageRatioProps = {
  src: string
  ratio?: number
  alt?: string
  className?: string
  style?: TStyles
}

const ImageRatio = ({
  src,
  ratio = 1,
  alt = '',
  className,
  style,
}: TImageRatioProps) => {
  const isAbsolute = className?.includes('absolute')
  const allClassNames = clsx(className, isAbsolute ? 'absolute' : 'relative')

  return (
    <div
      className={allClassNames}
      style={{
        ['--aspect-ratio' as any]: ratio,
        ...(style && { ...style }),
      }}
    >
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageRatio
