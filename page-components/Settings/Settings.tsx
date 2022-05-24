import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import {
  BellSimple,
  ClockClockwise,
  Eye,
  Prohibit,
  ShieldCheck,
  Translate,
  User,
} from 'phosphor-react'
import { Main, Section } from '@/components/Layout'
import { Tab, Tabs } from '@/components/Tabs'
import EditProfile from './EditProfile'
import Language from './Language'
import Blocking from './Blocking'
import Notification from './Notification'
import PasswordSecurity from './PasswordSecurity'
import ViewingSharing from './ViewingSharing'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Settings = () => {
  const [defaultActiveTab, setDefaultActiveTab] = useState('')
  const { t } = useTranslation('settings')
  const { t: ts } = useTranslation('common')
  const { query } = useRouter()

  useEffect(() => {
    if (query.tab) {
      setDefaultActiveTab(query.tab as string)
    }
  }, [query])

  return (
    <>
      <Head>
        <title>{ts(`title.${query.tab}`)} | Meetmax</title>
      </Head>
      <Main>
        <Section className="flex-1">
          <Tabs
            labelClassName="md:w-[220px]"
            tabClassName="flex-1 p-6"
            defaultActiveTab={defaultActiveTab}
            showQuery={true}
            vertical={true}
          >
            <Tab
              id="edit_profile"
              icon={<User size={20} />}
              label={t('tabs.edit_profile')}
            >
              <EditProfile />
            </Tab>
            <Tab
              id="language"
              icon={<Translate size={20} />}
              label={t('tabs.language')}
            >
              <Language />
            </Tab>
            <Tab
              id="blocking"
              icon={<Prohibit size={20} />}
              label={t('tabs.blocking')}
            >
              <Blocking />
            </Tab>
            <Tab
              id="notification"
              icon={<BellSimple size={20} />}
              label={t('tabs.notification')}
            >
              <Notification />
            </Tab>
            <Tab
              id="password_security"
              icon={<ShieldCheck size={20} />}
              label={t('tabs.password_security')}
            >
              <PasswordSecurity />
            </Tab>
            <Tab
              id="viewing_sharing"
              icon={<Eye size={20} />}
              label={t('tabs.viewing_sharing')}
            >
              <ViewingSharing />
            </Tab>
          </Tabs>
        </Section>
      </Main>
    </>
  )
}

export default Settings
