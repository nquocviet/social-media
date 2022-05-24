import React from 'react'
import cx from 'clsx'

type TSwitchProps = {
  active: boolean
  size?: number
  className?: string
  label?: string
  onChange: () => void
}

const Switch = ({
  active = false,
  size = 16,
  className,
  label,
  onChange,
}: TSwitchProps) => {
  const defaultClassName =
    'relative box-content border p-0.5 h-switch-toggle w-switch rounded-full cursor-pointer'
  const allClassNames = cx(
    defaultClassName,
    active ? 'bg-primary-600 border-primary-600' : 'bg-white border-gray-400',
    className
  )

  return (
    <div className="flex items-center gap-2">
      <div
        className={allClassNames}
        style={{
          ['--switch-toggle-size' as any]: `${size}px`,
        }}
        onClick={onChange}
      >
        <span
          className={cx(
            'absolute h-switch-toggle w-switch-toggle rounded-full transition-transform',
            active ? 'translate-x-full bg-white' : 'bg-gray-400'
          )}
        ></span>
      </div>
      {label && <span className="text-sm font-semibold">{label}</span>}
    </div>
  )
}

export default Switch
