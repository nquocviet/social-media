import React, { forwardRef, ReactNode, useState } from 'react'
import { Eye, EyeSlash, Info } from 'phosphor-react'
import clsx from 'clsx'
import { Tooltip } from '@components/Tooltip'

const MAX_LENGTH_INPUT = 64

type TInputTypes = 'email' | 'text' | 'password'
type TInputSizes = 'sm' | 'md' | 'lg'
type TInputRounded = 'sm' | 'md' | 'lg' | 'full'

type TInputProps = {
  type?: TInputTypes
  size?: TInputSizes
  rounded?: TInputRounded
  label?: string
  placeholder?: string
  className?: string
  error?: string
  maxLength?: number
  readOnly?: boolean
  defaultValue?: string
  prefix?: ReactNode
  suffix?: ReactNode
}

const inputSizes = {
  sm: 'px-3 py-1.5',
  md: 'px-3.5 py-2',
  lg: 'px-4 py-2.5',
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
      rounded = 'md',
      label,
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
        'focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100'
    )
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isInputPassword = type === 'password'

    return (
      <div className={allClassNames}>
        <label className="block w-full">
          {label && (
            <span className="text-base mb-1 inline-block font-semibold">
              {label}
            </span>
          )}
          <div className="flex items-center">
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
        </label>
        {/* {error && <Error className="absolute top-full pt-0.5">{error}</Error>} */}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
