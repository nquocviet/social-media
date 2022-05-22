import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const Messages = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('title.messages')} | Meetmax</title>
      </Head>
      Messages
    </>
  )
}

export default Messages
