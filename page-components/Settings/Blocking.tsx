import React from 'react'
import { useTranslation } from 'next-i18next'
import { MagnifyingGlass } from 'phosphor-react'
import { BlockUser } from '@/components/BlockUser'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'

const Blocking = () => {
  const { t } = useTranslation('common')
  const { t: ts } = useTranslation('settings')

  return (
    <>
      <Heading className="mb-4 text-lg">{ts('block_users')}</Heading>
      <p className="mb-4 font-semibold">{ts('block_description')}</p>
      <div className="flex max-w-[480px] flex-col">
        <Input
          placeholder={t('placeholder.type_name')}
          suffix={<MagnifyingGlass size={20} />}
        />
        <Heading className="mt-6 mb-4">{ts('block_users_list')}</Heading>
        <div className="flex flex-col items-stretch">
          {[...Array(6)].map((_, index) => (
            <BlockUser key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blocking
