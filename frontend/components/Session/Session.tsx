import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import {
  Desktop,
  DeviceMobile,
  DeviceTablet,
  DotsThreeOutline,
  Laptop,
  Question,
  SignOut,
} from 'phosphor-react'
import { Dot } from '../Dot'
import { Dropdown, Menu, MenuItem } from '../Dropdown'

type TSessionDevice = 'desktop' | 'laptop' | 'tablet' | 'mobile'

type TSessionProps = {
  device: TSessionDevice
  className?: string
}

const sessionIcons = {
  desktop: Desktop,
  laptop: Laptop,
  tablet: DeviceTablet,
  mobile: DeviceMobile,
}

const sessionColors = {
  desktop: 'primary',
  laptop: 'primary',
  tablet: 'green',
  mobile: 'green',
}

const dumbDeviceNames = {
  desktop: 'Windows PC',
  laptop: 'Windows Laptop',
  tablet: 'Samsung Tablet',
  mobile: 'Huawei GT3',
}

const Session = ({ device, className }: TSessionProps) => {
  const { t } = useTranslation('settings')
  const Icon = sessionIcons[device]
  const defaultClassName =
    'flex items-center justify-between rounded-xl p-4 shadow'
  const allClassNames = clsx(defaultClassName, className)

  return (
    <div className={allClassNames}>
      <div className="flex items-center">
        <Icon
          size={40}
          color={`var(--${sessionColors[device]}-500)`}
          className="mr-4 flex-shrink-0"
        />
        <div className="flex flex-col">
          <p className="flex items-center font-semibold">
            {dumbDeviceNames[device]}
            <Dot className="mx-1.5" />
            Sylhet, Bangladesh
          </p>
          <p className="flex items-center text-sm text-gray-500">
            Chrome
            <Dot className="mx-1.5" />
            20 minutes ago
          </p>
        </div>
      </div>
      <Dropdown
        className="inline-flex"
        preventClose={true}
        overlay={
          <Menu size={260} position="-right-2 top-full">
            <MenuItem className="font-semibold">
              <span className="inline-flex items-center">
                <Question size={20} className="mr-2" />
                {t('not_you')}
              </span>
            </MenuItem>
            <MenuItem className="font-semibold">
              <span className="inline-flex items-center">
                <SignOut size={20} className="mr-2" />
                {t('sign_out')}
              </span>
            </MenuItem>
          </Menu>
        }
      >
        <button type="button">
          <DotsThreeOutline size={20} weight="fill" />
        </button>
      </Dropdown>
    </div>
  )
}

export default Session
