import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Button } from '@/components/Button'
import { Section } from '@/components/Layout'

const navItems = [
  {
    slug: 'suggestions',
    label: 'suggestions',
  },
  {
    slug: 'followers',
    label: 'followers',
    count: 242,
  },
  {
    slug: 'following',
    label: 'following',
    count: 17,
  },
]

const Header = () => {
  const { t } = useTranslation('common')
  const { asPath } = useRouter()

  return (
    <Section>
      <header className="-mx-2 flex flex-col items-stretch p-4 xs:flex-row">
        {navItems.map(({ slug, label, count }, index) => {
          const isActive = asPath.includes(slug)

          return (
            <Link href={slug} key={index}>
              <a className="mb-4 flex-1 px-2 last:mb-0 xs:mb-0">
                <Button
                  color={isActive ? 'primary' : 'neutral'}
                  variant={isActive ? 'contained' : 'outline'}
                  size="sm"
                  className="h-full xl:text-lg"
                  fluid
                >
                  {t(label, { count })}
                </Button>
              </a>
            </Link>
          )
        })}
      </header>
    </Section>
  )
}

export default Header
