import React from 'react'
import {
  DotsThreeOutline,
  EyeClosed,
  MagnifyingGlass,
  PhoneCall,
  SpeakerSimpleHigh,
} from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import { useToggle } from '@/hooks/index'
import { Input } from '../Input'
import { Dropdown, Menu, MenuItem } from '../Dropdown'
import { Switch } from '../Switch'
import { UserMiniCard } from '../User'

const FriendList = () => {
  const { t } = useTranslation('common')
  const { open: messageSounds, toggle: toggleMessageSounds } = useToggle(true)
  const { open: callSounds, toggle: toggleCallSounds } = useToggle(true)
  const { open: activeStatus, toggle: toggleActiveStatus } = useToggle(true)

  return (
    <div className="w-friendlist flex-shrink-0">
      <aside className="fixed top-0 h-screen max-h-screen w-friendlist overflow-y-auto bg-white px-4 pb-4">
        <div className="mb-1.5 h-header w-full"></div>
        <section className="mb-6 last:m-0">
          <Input
            size="sm"
            placeholder={t('placeholder.search_friends')}
            prefix={<MagnifyingGlass size={20} />}
          />
        </section>
        <section className="mb-6 last:m-0">
          <header className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{t('friend.friends')}</h2>
            <Dropdown
              className="inline-flex"
              preventClose={true}
              overlay={
                <Menu size={260} position="-right-2 top-full">
                  <MenuItem className="font-semibold">
                    <span className="inline-flex items-center">
                      <SpeakerSimpleHigh size={20} className="mr-2" />
                      {t('friend.message_sounds')}
                    </span>
                    <Switch
                      size={12}
                      active={messageSounds}
                      onChange={toggleMessageSounds}
                    />
                  </MenuItem>
                  <MenuItem className="font-semibold">
                    <span className="inline-flex items-center">
                      <PhoneCall size={20} className="mr-2" />
                      {t('friend.call_sounds')}
                    </span>
                    <Switch
                      size={12}
                      active={callSounds}
                      onChange={toggleCallSounds}
                    />
                  </MenuItem>
                  <MenuItem className="font-semibold">
                    <span className="inline-flex items-center">
                      <EyeClosed size={20} className="mr-2" />
                      {t('friend.turn_on_status')}
                    </span>
                    <Switch
                      size={12}
                      active={activeStatus}
                      onChange={toggleActiveStatus}
                    />
                  </MenuItem>
                </Menu>
              }
            >
              <button type="button">
                <DotsThreeOutline size={20} weight="fill" />
              </button>
            </Dropdown>
          </header>
          <ul>
            {[...Array(20)].map((_, index) => (
              <UserMiniCard key={index} />
            ))}
          </ul>
        </section>
      </aside>
    </div>
  )
}

export default FriendList
