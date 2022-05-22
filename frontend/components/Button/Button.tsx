import React, { ReactNode, useRef } from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

type TButtonTypes = 'button' | 'submit' | 'reset'
type TButtonColors = 'primary' | 'neutral'
type TButtonVariants = 'contained' | 'outline' | 'text'
type TButtonSizes = 'xs' | 'sm' | 'md' | 'lg'
type TButtonRounded = 'sm' | 'md' | 'lg' | 'full'
type TButtonTransforms = 'normal' | 'lowercase' | 'uppercase' | 'capitalize'

type TBaseProps = {
  children: ReactNode
  type?: TButtonTypes
  color?: TButtonColors
  variant?: TButtonVariants
  size?: TButtonSizes
  rounded?: TButtonRounded
  transform?: TButtonTransforms
  fluid?: boolean
  disabled?: boolean
  square?: boolean
  className?: string
  target?: string
  prefix?: ReactNode
  suffix?: ReactNode
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLElement>) => void)
}

type TButtonAsButton = TBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TBaseProps> & {
    as?: 'button'
  }

type TButtonAsLink = TBaseProps &
  Omit<LinkProps, keyof TBaseProps> & {
    as: 'a'
  }

type TButtonAsLabel = TBaseProps &
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof TBaseProps> & {
    as: 'label'
  }

type TButtonProps = TButtonAsButton | TButtonAsLink | TButtonAsLabel

const buttonVariants = {
  text: {
    primary:
      'text-primary-700 border-transparent hover:bg-primary-50 focus:ring-primary-100',
    neutral:
      'text-gray-600 border-transparent hover:bg-gray-100 focus:ring-gray-200',
  },
  contained: {
    primary:
      'bg-primary-600 border-primary-600 text-white hover:bg-primary-700 hover:border-primary-700 focus:ring-primary-100',
    neutral:
      'bg-gray-800 border-gray-800 text-white hover:bg-gray-900 hover:border-primary-900 focus:ring-gray-200',
  },
  outline: {
    primary:
      'bg-white border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-100',
    neutral:
      'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 focus:ring-gray-100',
  },
  disabled: {
    text: 'disabled:cursor-not-allowed disabled:text-neutral-400 disabled:hover:bg-transparent',
    contained:
      'disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:border-neutral-300 disabled:text-neutral-500 disabled:hover:shadow-none',
    outline:
      'disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-neutral-400 disabled:border-neutral-400',
  },
}

const buttonSizes = {
  xs: 'px-2.5 py-1',
  sm: 'px-3 py-1.5',
  md: 'px-3.5 py-2.5',
  lg: 'px-4 py-3',
}

const buttonIconSizes = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-2.5',
  lg: 'p-3',
}

const buttonRounded = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const buttonTransforms = {
  normal: 'normal-case',
  lowercase: 'lowercase',
  uppercase: 'uppercase',
  capitalize: 'capitalize',
}

const Button = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  size = 'md',
  rounded = 'lg',
  transform = 'normal',
  fluid,
  disabled = false,
  square = false,
  className,
  target = '_self',
  prefix,
  suffix,
  ...rest
}: TButtonProps) => {
  const ref = useRef<any>(null)
  const isAbsolute = className?.includes('absolute')
  const defaultClassName =
    'inline-flex justify-center items-center border outline-none font-semibold transition-all focus:ring-4 disabled:text-gray-500'
  const allClassNames = clsx(
    defaultClassName,
    className,
    isAbsolute ? 'absolute' : 'relative',
    buttonVariants[variant][color],
    buttonRounded[rounded],
    buttonTransforms[transform],
    square ? buttonIconSizes[size] : buttonSizes[size],
    disabled && buttonVariants['disabled'][variant],
    fluid ? 'w-full' : 'w-auto'
  )

  if (rest.as === 'a') {
    const { as, href, ...otherAttr } = rest

    return (
      <Link href={href}>
        <a className={allClassNames} target={target} {...otherAttr}>
          {prefix && <span className="mr-1">{prefix}</span>}
          {children}
          {suffix && <span className="ml-1">{suffix}</span>}
        </a>
      </Link>
    )
  }

  if (rest.as === 'label') {
    const { as, ...otherAttr } = rest

    return (
      <label role="button" className={allClassNames} {...otherAttr}>
        {prefix && <span className="mr-1">{prefix}</span>}
        {children}
        {suffix && <span className="ml-1">{suffix}</span>}
      </label>
    )
  }

  const { as, ...otherAttr } = rest
  return (
    <button type={type} className={allClassNames} ref={ref} {...otherAttr}>
      {prefix && <span className="mr-1">{prefix}</span>}
      {children}
      {suffix && <span className="ml-1">{suffix}</span>}
    </button>
  )
}

export default Button
