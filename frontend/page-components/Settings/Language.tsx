import React from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'

const locales = [
  { value: 'en', label: 'English (UK)' },
  { value: 'vi', label: 'Vietnamese' },
]

const Language = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const currentLocale = locales.find(({ value, label }) => value === locale)

  const handleLocaleChange = (locale: string) => {}

  return (
    <div>
      <Heading className="mb-4 text-lg">{t('title.language')}</Heading>
      <p className="mb-4 font-semibold">{t('show_language')}</p>
      <Select
        options={locales}
        className="w-[200px]"
        defaultValue={currentLocale}
        onChange={handleLocaleChange}
      />
      <div className="mt-4 flex">
        <Button color="neutral" variant="outline" size="sm" className="mr-4">
          {t('action.cancel')}
        </Button>
        <Button size="sm">{t('action.save_changes')}</Button>
      </div>
    </div>
  )
}

export default Language
