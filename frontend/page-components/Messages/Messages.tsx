import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { Main } from '@/components/Layout'
import Conversations from './Conversations'
import OpenConversation from './OpenConversation'

const Messages = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('title.messages')} | Meetmax</title>
      </Head>
      <Main>
        <Conversations />
        <OpenConversation />
      </Main>
    </>
  )
}

export default Messages
