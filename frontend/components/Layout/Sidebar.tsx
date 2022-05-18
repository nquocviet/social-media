import React from 'react'
import {
  SquaresFour,
  Users,
  ChatText,
  BellSimple,
  GlobeHemisphereWest,
  User,
  Gear,
  SignOut,
} from 'phosphor-react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { Logo } from '@/components/Logo'

const navItems = [
  {
    slug: '/',
    label: 'Feed',
    icon: SquaresFour,
  },
  {
    slug: '/community',
    label: 'My community',
    icon: Users,
  },
  {
    slug: '/messages',
    label: 'Messages',
    icon: ChatText,
  },
  {
    slug: '/notification',
    label: 'Notification',
    icon: BellSimple,
  },
  {
    slug: '/explore',
    label: 'Explore',
    icon: GlobeHemisphereWest,
  },
  {
    slug: '/profile',
    label: 'Profile',
    icon: User,
  },
  {
    slug: '/settings',
    label: 'Settings',
    icon: Gear,
  },
]

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className="w-[280px] bg-white p-4">
      <Logo />
      <nav className="mt-8">
        <ul className="font-semibold">
          {navItems.map((navItem, index) => {
            const { slug, label, icon: Icon } = navItem

            return (
              <li className="mb-3" key={index}>
                <Link href={slug}>
                  <a
                    className={clsx(
                      'flex items-center rounded-lg px-3 py-2 transition-colors duration-200',
                      router.asPath === slug
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100'
                    )}
                  >
                    <Icon size={20} />
                    <span className="ml-4">{label}</span>
                  </a>
                </Link>
              </li>
            )
          })}
          <li className="mb-3">
            <a
              role="button"
              className="flex w-full items-center rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-100"
            >
              <SignOut size={20} />
              <span className="ml-4">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
