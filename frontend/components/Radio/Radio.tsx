import { ChangeEvent } from 'react'
import clsx from 'clsx'

type TLabelPlacement = 'start' | 'end' | 'top' | 'bottom'

type TRadioProps = {
  label?: string
  labelPlacement?: TLabelPlacement
  size?: number
  value: string | number
  name: string
  className?: string
  containerClassName?: string
  disabled?: boolean
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const labelPlacementStyles = {
  start: 'flex-row-reverse',
  end: 'flex-row',
  top: 'flex-col-reverse',
  bottom: 'flex-col',
}

const Radio = ({
  label,
  labelPlacement = 'end',
  size = 14,
  value,
  checked,
  name,
  className,
  containerClassName,
  disabled = false,
  onChange,
  ...rest
}: TRadioProps) => {
  const clickableClassName = checked
    ? 'ring-current before:scale-0 after:scale-100 after:visible'
    : 'ring-neutral-500 before:scale-100 after:scale-0 after:invisible'
  const disabledClassName = checked
    ? 'before:scale-0 bg-gray-300 ring-gray-300 after:scale-100 after:visible'
    : 'before:scale-100 ring-neutral-400 after:scale-0 after:invisible'
  const defaultClassName =
    'relative inline-flex items-center justify-center w-radio h-radio overflow-hidden ring-1 -mt-0.5 rounded-full transition-all after:w-radio after:h-radio after:border-[3px] after:border-white after:rounded-full after:bg-primary-700 after:duration-100 after:ease-linear after:transition-transform before:duration-150 before:absolute before:w-full before:h-full before:bg-white'
  const allClassNames = clsx(
    defaultClassName,
    disabled ? disabledClassName : clsx('text-primary-700', clickableClassName),
    className
  )

  return (
    <label
      className={clsx(
        'inline-flex select-none items-center',
        labelPlacementStyles[labelPlacement],
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        containerClassName
      )}
      style={{
        ['--radio-size' as any]: `${size}px`,
      }}
    >
      <span className={allClassNames}></span>
      <input
        className="hidden"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      {label && <span className="ml-2.5 -mt-0.5">{label}</span>}
    </label>
  )
}

export default Radio
