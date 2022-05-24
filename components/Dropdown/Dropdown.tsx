import React, {
  Fragment,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import { useOnClickOutside } from '@/hooks/index'

type TMenuItemAs = 'button' | 'a'

type TDropdownProps = {
  children: ReactElement
  overlay: ReactElement
  className?: string
  preventClose?: boolean
}

type TMenuProps = {
  children: ReactNode | ReactNode[]
  open?: boolean
  size?: number
  className?: string
  position?: string
}

type TMenuItemBaseProps = {
  children: ReactNode | ReactNode[]
  className?: string
  onClose?: () => void
}

type TMenuItemAsButton = TMenuItemBaseProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof TMenuItemBaseProps
  > & {
    as?: 'button'
  }

type TMenuItemAsLink = TMenuItemBaseProps &
  Omit<LinkProps, keyof TMenuItemBaseProps> & {
    as: 'a'
  }

type TMenuItemProps = TMenuItemAsButton | TMenuItemAsLink

export const Dropdown = ({
  children,
  overlay,
  className,
  preventClose = false,
}: TDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const dropdownRef = useRef(null)
  const defaultClassName = 'relative'
  const allClassNames = clsx(defaultClassName, className)

  const onToggle = () => setOpen((prevState) => !prevState)
  const onClose = () => setOpen(false)

  useOnClickOutside(dropdownRef, onClose)

  return (
    <div className={allClassNames} ref={dropdownRef}>
      {React.cloneElement(children, { onClick: onToggle })}
      <Menu
        className={overlay.props.className}
        position={overlay.props.position}
        size={overlay.props.size}
        open={open}
      >
        {overlay.props.children.length ? (
          overlay.props.children.map(
            (menuItem: ReactElement, index: number) => (
              <Fragment key={index}>
                {React.cloneElement(menuItem, {
                  onClose: preventClose ? null : onClose,
                })}
              </Fragment>
            )
          )
        ) : (
          <Fragment>
            {React.cloneElement(overlay.props.children, { onClose })}
          </Fragment>
        )}
      </Menu>
    </div>
  )
}

export const Menu = ({
  children,
  open,
  size = 250,
  className,
  position = 'top-full right-0',
}: TMenuProps) => {
  const defaultClassName =
    'absolute z-elevate w-menu min-w-[200px] bg-white p-2 mt-1 shadow-sm border border-gray-100 rounded overflow-hidden'
  const allClassNames = clsx(defaultClassName, className, position)

  return open ? (
    <ul
      className={allClassNames}
      style={{ ['--menu-dropdown-size' as any]: `${size}px` }}
    >
      {children}
    </ul>
  ) : (
    <></>
  )
}

export const MenuDivider = () => {
  return <li className="my-2 border-b border-gray-200"></li>
}

export const MenuItem = ({
  children,
  className,
  onClose,
  ...rest
}: TMenuItemProps) => {
  const defaultClassName =
    'flex justify-between items-center text-left font-medium px-4 py-2 rounded hover:bg-gray-100 hover:text-tertiary-900'
  const allClassNames = clsx(defaultClassName, className)

  if (rest.as === 'a') {
    const { as, ...otherAttr } = rest
    return (
      <li className="flex flex-col items-stretch" onClick={onClose}>
        <Link {...otherAttr}>
          <a className={allClassNames}>{children}</a>
        </Link>
      </li>
    )
  }

  return (
    <li className="flex flex-col items-stretch" onClick={onClose}>
      <button type="button" className={allClassNames} {...rest}>
        {children}
      </button>
    </li>
  )
}
