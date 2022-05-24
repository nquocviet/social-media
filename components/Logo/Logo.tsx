import Link from 'next/link'
import React from 'react'

type TLogoProps = {
  redirectable?: boolean
}

const Logo = ({ redirectable = true }: TLogoProps) => {
  if (redirectable) {
    return (
      <Link href="/">
        <a className="cursor-pointer">
          <span className="text-xl font-bold text-gray-600">Meetmax</span>
        </a>
      </Link>
    )
  }

  return (
    <div>
      <span className="text-xl font-bold text-gray-600">Meetmax</span>
    </div>
  )
}

export default Logo
