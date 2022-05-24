import { useState, Fragment, cloneElement, ReactNode, useEffect } from 'react'
import clsx from 'clsx'
import { Divider } from '../Divider'
import { useRouter } from 'next/router'

type TTabsProps = {
  children: ReactNode | ReactNode[]
  className?: string
  labelClassName?: string
  tabClassName?: string
  defaultActiveTab?: string
  vertical?: boolean
  showQuery?: boolean
}

type TTabProps = {
  children: ReactNode | ReactNode[]
  icon?: ReactNode
  id: string
  label: string
  ref?: any
  onChange?: () => void
}

type TTabLabelProps = {
  children: ReactNode
  isActive: boolean
  className?: string
  vertical?: boolean
  onClick: () => void
}

const TabLabel = ({
  children,
  isActive,
  className,
  vertical,
  ...rest
}: TTabLabelProps) => {
  const defaultClassName =
    'relative flex items-center font-semibold cursor-pointer rounded transition-colors duration-200'
  const allClassNames = clsx(
    defaultClassName,
    className,
    !isActive && 'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
    vertical ? 'text-left p-2' : 'text-center py-1 px-3',
    isActive && vertical && 'bg-gray-100'
  )

  return (
    <>
      <li className={allClassNames} {...rest}>
        {children}
      </li>
      {vertical && <Divider className="my-0.5" />}
    </>
  )
}

export const Tabs = ({
  children,
  className,
  defaultActiveTab,
  labelClassName,
  tabClassName,
  vertical = false,
  showQuery = false,
  ...rest
}: TTabsProps) => {
  const [activeTab, setActiveTab] = useState((children as any)[0].props.id)
  const router = useRouter()
  const defaultTabsClassName = 'flex h-full items-stretch'
  const tabsClassNames = clsx(
    defaultTabsClassName,
    className,
    vertical ? 'flex-col md:flex-row' : 'flex-col'
  )

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab)
    }
  }, [defaultActiveTab])

  const changeTab = (tab: string) => {
    setActiveTab(tab)

    if (showQuery) {
      router.push({
        pathname: router.pathname,
        query: {
          tab,
        },
      })
    }
  }

  return (
    <div className={tabsClassNames} {...rest}>
      <ul
        className={clsx(
          'mb-3 flex p-4',
          vertical
            ? 'flex-col items-stretch justify-start border-r border-gray-200'
            : 'flex-row items-center justify-center'
        )}
      >
        {children instanceof Array &&
          children.map((child: any, index) => (
            <TabLabel
              key={index}
              isActive={child.props.id === activeTab}
              vertical={vertical}
              className={labelClassName}
              onClick={() => {
                if (child.props.onChange) {
                  child.props.onChange()
                }
                changeTab(child.props.id)
              }}
            >
              {child.props.icon && (
                <span className="mr-2">{child.props.icon}</span>
              )}
              {child.props.label}
            </TabLabel>
          ))}
      </ul>
      {children instanceof Array &&
        children.map((child: any, index) => {
          const className = clsx(
            tabClassName,
            child.props.id !== activeTab && 'hidden'
          )

          if (showQuery) {
            if (child.props.id === activeTab) {
              return (
                <Fragment key={index}>
                  {cloneElement(child, {
                    className,
                  })}
                </Fragment>
              )
            }
          } else {
            return (
              <Fragment key={index}>
                {cloneElement(child, {
                  className,
                })}
              </Fragment>
            )
          }
        })}
    </div>
  )
}

export const Tab = ({ children, icon, label, ...rest }: TTabProps) => {
  return <div {...rest}>{children}</div>
}
