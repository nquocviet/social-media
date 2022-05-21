import React, { ChangeEvent, forwardRef, useEffect, useRef } from 'react'
import clsx from 'clsx'

const MAX_LENGTH = 256

type TTextareaProps = {
  placeholder?: string
  className?: string
  name?: string
  error?: string
  reset?: boolean
  maxLength?: number
  minHeight?: number
  readOnly?: boolean
  contentRef?: any
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

const Textarea = forwardRef<HTMLDivElement, TTextareaProps>(
  (
    {
      placeholder = '',
      className,
      name,
      error,
      reset,
      maxLength = MAX_LENGTH,
      minHeight = 0,
      contentRef,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const defaultClassName = 'relative bg-gray-100 rounded-xl px-3 py-2'
    const allClassNames = clsx(defaultClassName, className)
    const placeholderRef = useRef(null)
    const textContent =
      ref && 'current' in ref && ref.current && ref.current.textContent

    useEffect(() => {
      if (reset && ref && 'current' in ref && ref.current) {
        ref.current.textContent = ''
      }

      if (
        ref &&
        'current' in ref &&
        ref.current &&
        ref.current.textContent?.trim().length
      ) {
        if (placeholderRef.current) {
          ;(placeholderRef.current as HTMLSpanElement).textContent = ''
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textContent, reset])

    useEffect(() => {
      const handlePasteText = (event: any) => {
        if (ref && 'current' in ref && ref.current) {
          event.preventDefault()
          const text = event.clipboardData.getData('text/plain')
          document.execCommand('insertHTML', false, text)
        }
      }

      window.addEventListener('paste', handlePasteText)
      return () => window.removeEventListener('paste', handlePasteText)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onKeyPress = (event: any) => {
      const placeholderEl = placeholderRef.current

      if (placeholderEl) {
        ;(placeholderEl as HTMLSpanElement).textContent = ''
      }
    }

    const onKeyUp = (event: any) => {
      const SPACEBAR_CODE = 32
      const placeholderEl = placeholderRef.current

      if (event.keyCode === SPACEBAR_CODE && placeholderEl) {
        ;(placeholderEl as HTMLSpanElement).textContent = ''
      }

      if (contentRef && event.key !== 'Enter') {
        contentRef.current = event.target.innerText
      }

      if (
        placeholderEl &&
        (event.key === 'Backspace' || event.key === 'Delete')
      ) {
        const isEmpty = !event.target.textContent

        ;(placeholderEl as HTMLSpanElement).textContent = isEmpty
          ? placeholder
          : ''
      }
    }

    const onKeyDown = (event: any) => {
      const charCode = String.fromCharCode(event.which).toLowerCase()

      if ((event.ctrlKey || event.metaKey) && charCode === 'v') {
        const placeholderEl = placeholderRef.current

        if (placeholderEl) {
          ;(placeholderEl as HTMLSpanElement).textContent = ''
        }
      }
    }

    return (
      <div className="flex w-full flex-col items-stretch">
        <div
          className={allClassNames}
          tabIndex={-1}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <div className="relative h-full w-full">
            <div
              ref={ref}
              className={clsx('w-full break-all outline-none', className)}
              contentEditable="true"
              onKeyPress={onKeyPress}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              style={{
                minHeight,
              }}
              {...rest}
            ></div>
            <span
              ref={placeholderRef}
              className="pointer-events-none absolute top-0 left-0 select-none text-gray-400"
            >
              {placeholder}
            </span>
          </div>
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export default Textarea
