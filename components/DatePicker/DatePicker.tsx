import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Datepicker, { registerLocale } from 'react-datepicker'
import en from 'date-fns/locale/en-GB'
import vi from 'date-fns/locale/vi'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('en', en)
registerLocale('vi', vi)

type TDatePickerSizes = 'sm' | 'md' | 'lg'
type TDatePickerRounded = 'sm' | 'md' | 'lg' | 'full'

type TDatePickerProps = {
  size?: TDatePickerSizes
  rounded?: TDatePickerRounded
  label?: string
  selected: Date
  prefix?: ReactNode
  suffix?: ReactNode
  className?: string
  onChange: (date: Date) => void
}

const datePickerSizes = {
  sm: 'px-3 py-1.5',
  md: 'px-3.5 py-2.5',
  lg: 'px-4 py-3',
}

const datePickerRounded = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const DatePicker = ({
  label,
  size = 'md',
  rounded = 'lg',
  selected,
  prefix,
  suffix,
  className,
  onChange,
}: TDatePickerProps) => {
  const { locale } = useRouter()
  const defaultClassName =
    'relative flex items-end border border-gray-300 transition-all'
  const allClassNames = clsx(
    defaultClassName,
    datePickerSizes[size],
    datePickerRounded[rounded],
    className,
    'focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-100'
  )

  return (
    <label className="block w-full text-left">
      {label && (
        <span className="text-base mb-1 inline-block font-semibold">
          {label}
        </span>
      )}
      <div className={allClassNames}>
        <div className="flex w-full items-center">
          {prefix && <span className="mr-2">{prefix}</span>}
          <Datepicker locale={locale} selected={selected} onChange={onChange} />
          {suffix && <span className="ml-2">{suffix}</span>}
        </div>
      </div>
    </label>
  )
}

export default DatePicker
