import React, { ReactNode, useEffect, useRef, useState } from 'react'
import cx from 'clsx'

type TTooltipDirection = 'top' | 'bottom' | 'left' | 'right'

type TTooltipProps = {
  direction?: TTooltipDirection
  message: string
  children: ReactNode
  className?: string
}

const tooltipMessageDirections = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-1',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-1',
  left: 'right-full top-1/2 -translate-y-1/2 mr-1',
  right: 'left-full top-1/2 -translate-y-1/2 ml-1',
}

const Tooltip = ({
  className,
  message,
  direction = 'top',
  children,
}: TTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isAbsolute = className && className.includes('absolute')
  const defaultClassName = 'inline-flex items-center z-30'
  const allClassNames = cx(
    defaultClassName,
    className,
    !isAbsolute && 'relative'
  )
  const tooltipClassName = cx(
    'absolute bg-black text-white text-left text-sm px-2.5 py-1.5 whitespace-nowrap rounded-md transition-all',
    tooltipMessageDirections[direction],
    isVisible ? 'opacity-100 delay-300 visible' : 'opacity-0 invisible'
  )

  useEffect(() => {
    let TIMES_PER_SECOND = 20
    let wait = false

    const mouseMove = (event: MouseEvent) => {
      if (ref && !wait) {
        if ((ref.current as any).contains(event.target)) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }

        wait = true
        setTimeout(function () {
          wait = false
        }, 1000 / TIMES_PER_SECOND)
      }
    }

    document.addEventListener('mousemove', mouseMove)
    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div ref={ref} className={allClassNames}>
      {children}
      <span className={tooltipClassName}>{message}</span>
    </div>
  )
}

export default Tooltip
