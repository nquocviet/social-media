import React from 'react'
import { useTranslation } from 'next-i18next'
import { Section } from '@/components/Layout'
import { Heading } from '@/components/Heading'
import {
  Briefcase,
  Cake,
  GlobeHemisphereWest,
  Heart,
  MapPin,
  Phone,
  Rss,
  User,
} from 'phosphor-react'

const Intro = () => {
  const { t } = useTranslation('common')

  return (
    <div className="mb-layout md:mb-0 md:w-sidebar">
      <Section>
        <header className="flex justify-between px-4 py-3">
          <Heading className="text-xl">{t('intro')}</Heading>
        </header>
        <ul className="px-4 pb-4">
          <li className="mb-3 flex items-center last:mb-0">
            <GlobeHemisphereWest size={20} className="mr-3" />
            <span>uihut.com</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <User size={20} className="mr-3" />
            <span>Male</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <Heart size={20} className="mr-3" />
            <span>Single</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <Cake size={20} className="mr-3" />
            <span>Born Jun 18, 1999</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <MapPin size={20} className="mr-3" />
            <span>Sylhet, Bangladesh</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <Briefcase size={20} className="mr-3" />
            <span>Developer</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <Phone size={20} className="mr-3" />
            <span>+64 424 523 532</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <Rss size={20} className="mr-3" />
            <span>2.454 followers</span>
          </li>
          <li className="mb-3 flex items-center last:mb-0">
            <Rss size={20} className="mr-3" />
            <span>64 following</span>
          </li>
        </ul>
      </Section>
    </div>
  )
}

export default Intro
