import React, { FormEvent, forwardRef, ReactNode, useState } from 'react'
import { Eye, EyeSlash, Info } from 'phosphor-react'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useErrorContext } from '@/context/error'
import { Tooltip } from '../Tooltip'
import { Error } from '../Error'

const MAX_LENGTH_INPUT = 64

type TInputTypes = 'email' | 'text' | 'password'
type TInputSizes = 'sm' | 'md' | 'lg'
type TInputRounded = 'sm' | 'md' | 'lg' | 'full'

type TInputProps = {
  type?: TInputTypes
  size?: TInputSizes
  rounded?: TInputRounded
  label?: string
  value: string
  name?: string
  placeholder?: string
  className?: string
  error?: string
  maxLength?: number
  readOnly?: boolean
  defaultValue?: string
  prefix?: ReactNode
  suffix?: ReactNode
  onChange?: (event: any) => void
}

const inputSizes = {
  sm: 'px-3 py-1.5',
  md: 'px-3.5 py-2.5',
  lg: 'px-4 py-3',
}

const inputRounded = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      type = 'text',
      size = 'md',
      rounded = 'lg',
      label,
      name,
      placeholder,
      className,
      error,
      maxLength = MAX_LENGTH_INPUT,
      prefix,
      suffix,
      readOnly = false,
      ...rest
    },
    ref
  ) => {
    const defaultClassName =
      'relative flex items-end border border-gray-300 transition-all'
    const allClassNames = clsx(
      defaultClassName,
      inputSizes[size],
      inputRounded[rounded],
      className,
      !readOnly &&
        'focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-100'
    )
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isInputPassword = type === 'password'
    const { t } = useTranslation('validate')
    const [errors, setErrors] = useErrorContext()

    const onKeyDown = () => {
      if (Object.keys(errors).length) {
        const { [name as string]: error, ...rest } = errors

        setErrors(rest)
      }
    }

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
            <input
              {...(isInputPassword && showPassword
                ? { type: 'text' }
                : { type: 'password' })}
              {...(!isInputPassword && { type: type })}
              className={clsx(
                'w-full border-none bg-transparent outline-none',
                readOnly && 'pointer-events-none'
              )}
              maxLength={maxLength}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              onKeyDown={onKeyDown}
              spellCheck="false"
              placeholder={placeholder}
              readOnly={readOnly}
              ref={ref}
              {...rest}
            />
            {suffix && <span className="ml-2">{suffix}</span>}
            {type === 'password' && (
              <button
                type="button"
                className="ml-2 outline-none"
                onClick={() => setShowPassword((prevState) => !prevState)}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <Eye size={18} /> : <EyeSlash size={18} />}
              </button>
            )}
            {readOnly && (
              <Tooltip className="ml-2" message="This field cannot be edited">
                <Info color="var(--gray-700)" size={18} />
              </Tooltip>
            )}
          </div>
        </div>
        {error && <Error error={t(error)} className="-mb-2 pt-1" />}
      </label>
    )
  }
)

Input.displayName = 'Input'

export default Input
