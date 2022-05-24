import React, { useRef, useState } from 'react'
import { CaretDown } from 'phosphor-react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { useOnClickOutside } from '@/hooks/index'

type TOption = {
  label: string
  value: string
}

type TSelectProps = {
  options: TOption[]
  defaultValue?: TOption | {}
  maxHeight?: number
  position?: string
  borderless?: boolean
  onChange: (value: string) => void
  className?: string
}

const Select = ({
  options,
  defaultValue = {},
  maxHeight = 250,
  position = 'top-[calc(100%+6px)] right-0',
  borderless = false,
  className,
  onChange,
}: TSelectProps) => {
  const [optionSelected, setOptionSelected] = useState(defaultValue)
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const selectRef = useRef(null)
  const defaultClassName =
    'flex items-center justify-between cursor-pointer rounded pl-3.5 pr-2 py-2 focus-within:border-gray-700'
  const allClassNames = clsx(
    defaultClassName,
    className,
    !borderless && 'border border-gray-200'
  )

  const handleClickOutside = () => setShowOptions(false)

  useOnClickOutside(selectRef, handleClickOutside)

  const handleSelect = ({ value, label }: TOption) => {
    const option = { value, label }

    setShowOptions(false)
    setOptionSelected(option)
    onChange(value)
  }

  return (
    <div className="relative font-semibold" ref={selectRef}>
      <div
        className={allClassNames}
        tabIndex={0}
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        {(optionSelected as TOption).label}
        <span
          className={clsx(
            'ml-2 transition-transform duration-300',
            showOptions && 'rotate-x-180'
          )}
        >
          <CaretDown size={16} weight="bold" />
        </span>
      </div>
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
            }}
            className={clsx(
              'absolute z-dropdown flex w-full min-w-[200px] flex-col items-stretch overflow-hidden rounded border border-gray-100 bg-white shadow',
              position
            )}
          >
            <ul
              className="overflow-auto"
              style={{ maxHeight: `${maxHeight}px` }}
            >
              {options.map(({ value, label }) => (
                <li
                  key={value}
                  className={clsx(
                    'cursor-pointer px-3.5 py-2 transition-colors duration-200',
                    (optionSelected as any).value === value
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-100'
                  )}
                  onClick={() => handleSelect({ value, label })}
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select
