import React, { useRef, useState } from 'react'
import { CaretDown } from 'phosphor-react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { useOnClickOutside } from '@/hooks/index'
import { useTranslation } from 'next-i18next'
import { Radio } from '../Radio'

type TOption = {
  label: string
  value: string | number
}

type TSelectRadioProps = {
  options: TOption[]
  defaultValue?: TOption | {}
  name: string
  maxHeight?: number
  position?: string
  borderless?: boolean
  onChange: (value: string | number) => void
  className?: string
}

const SelectRadio = ({
  options,
  defaultValue = {},
  name,
  maxHeight = 250,
  position = 'top-[calc(100%+6px)] right-0',
  borderless = false,
  className,
  onChange,
}: TSelectRadioProps) => {
  const { t } = useTranslation('common')
  const [optionSelected, setOptionSelected] = useState(defaultValue)
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const selectRef = useRef(null)
  const defaultClassName =
    'flex items-center justify-between cursor-pointer rounded bg-primary-50 pl-3.5 pr-2 py-2 focus-within:border-gray-700'
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
        <span className="text-primary-600">
          {t(`option.${(optionSelected as TOption).label}`)}
        </span>
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
              'absolute z-dropdown flex w-full min-w-[150px] flex-col items-stretch overflow-hidden rounded border border-gray-100 bg-white shadow',
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
                  className="cursor-pointer px-3.5 py-2 transition-colors duration-200"
                  onClick={() => handleSelect({ value, label })}
                >
                  <Radio
                    label={t(`option.${label}`)}
                    name={name}
                    value={value}
                    checked={(optionSelected as any).value === value}
                    onChange={() => setOptionSelected({ value, label })}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SelectRadio
