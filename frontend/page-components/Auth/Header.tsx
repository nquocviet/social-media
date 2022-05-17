import React from 'react'
import { Logo } from '@components/Logo'
import { Select } from '@components/Select'
import { useRouter } from 'next/router'

const locales = [
  { value: 'en', label: 'English (UK)' },
  { value: 'vi', label: 'Vietnamese' },
]

const Header = () => {
  const router = useRouter()
  const { locale } = router
  const currentLocale = locales.find(({ value, label }) => value === locale)

  const handleLocaleChange = (locale: string) => {
    router.replace(router.pathname, router.pathname, { locale })
  }

  return (
    <header className="flex items-center justify-between bg-white py-4 px-8">
      <Logo redirectable={false} />
      <Select
        options={locales}
        defaultValue={currentLocale}
        onChange={handleLocaleChange}
        borderless
      />
    </header>
  )
}

export default Header
