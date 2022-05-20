import React, { ChangeEvent, ReactNode } from 'react'
import clsx from 'clsx'
import { Radio } from '../Radio'
import { useTranslation } from 'next-i18next'

type TGenderInputSizes = 'sm' | 'md' | 'lg'
type TGenderInputRounded = 'sm' | 'md' | 'lg' | 'full'

type TGenderInputProps = {
  size?: TGenderInputSizes
  rounded?: TGenderInputRounded
  label?: string
  className?: string
  selected: string
  prefix?: ReactNode
  suffix?: ReactNode
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const genderInputSizes = {
  sm: 'px-3 py-1.5',
  md: 'px-3.5 py-2.5',
  lg: 'px-4 py-3',
}

const genderInputRounded = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const GenderInput = ({
  size = 'md',
  rounded = 'lg',
  label,
  className,
  selected = '0',
  prefix,
  suffix,
  onChange,
}: TGenderInputProps) => {
  const { t } = useTranslation('common')
  const defaultClassName =
    'relative flex items-end border border-gray-300 outline-none transition-all focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-100'
  const allClassNames = clsx(
    defaultClassName,
    genderInputSizes[size],
    genderInputRounded[rounded],
    className
  )

  return (
    <div className="w-full text-left">
      {label && (
        <div className="text-base mb-1 w-full font-semibold">{label}</div>
      )}
      <div className={allClassNames} tabIndex={0}>
        <div className="flex w-full items-stretch">
          {prefix && <span className="mr-2">{prefix}</span>}
          <div className="-mb-0.5 flex flex-1 items-end text-sm font-semibold">
            <div className="flex-1 text-center">
              <Radio
                checked={selected === '0'}
                name="gender"
                value="0"
                label={t('sex.male')}
                onChange={onChange}
              />
            </div>
            <div className="flex-1 text-center">
              <Radio
                checked={selected === '1'}
                name="gender"
                value="1"
                label={t('sex.female')}
                onChange={onChange}
              />
            </div>
          </div>
          {suffix && <span className="ml-2">{suffix}</span>}
        </div>
      </div>
    </div>
  )
}

export default GenderInput
