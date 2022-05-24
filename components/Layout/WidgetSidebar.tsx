import React from 'react'
import { useTranslation } from 'next-i18next'
import { ChatText, DotsThreeOutline, EyeSlash } from 'phosphor-react'
import { Anchor } from '../Anchor'
import { Dropdown, Menu, MenuItem } from '../Dropdown'
import { EventCard } from '../Event'
import { UserCard } from '../User'
import { Divider } from '../Divider'
import Section from './Section'
import { BirthdayCard } from '../Birthday'
import { Heading } from '../Heading'

const WidgetSidebar = () => {
  const { t } = useTranslation('common')

  return (
    <div className="hidden w-sidebar xl:block">
      <Section>
        <header className="flex justify-between px-4 py-3">
          <Heading>{t('might_like')}</Heading>
          <Anchor href="/#">{t('action.see_all')}</Anchor>
        </header>
        <Divider />
        <UserCard />
      </Section>
      <Section>
        <header className="flex justify-between px-4 py-3">
          <Heading>{t('recent_event')}</Heading>
          <Dropdown
            className="inline-flex flex-shrink-0"
            preventClose={true}
            overlay={
              <Menu size={200} position="-right-2 top-full">
                <MenuItem className="font-semibold">
                  <span className="inline-flex items-center">
                    <EyeSlash size={20} className="mr-2" />
                    {t('action.hide_event')}
                  </span>
                </MenuItem>
                <MenuItem className="font-semibold">
                  <span className="inline-flex items-center">
                    <ChatText size={20} className="mr-2" />
                    {t('action.report_event')}
                  </span>
                </MenuItem>
              </Menu>
            }
          >
            <button type="button">
              <DotsThreeOutline size={20} weight="fill" />
            </button>
          </Dropdown>
        </header>
        <Divider />
        <div className="flex flex-col items-stretch p-4">
          <EventCard />
          <EventCard />
        </div>
      </Section>
      <Section>
        <header className="flex justify-between px-4 py-3">
          <Heading>{t('birthdays')}</Heading>
          <Anchor href="/#">{t('action.see_all')}</Anchor>
        </header>
        <Divider />
        <div className="p-4">
          <BirthdayCard />
        </div>
      </Section>
    </div>
  )
}

export default WidgetSidebar
