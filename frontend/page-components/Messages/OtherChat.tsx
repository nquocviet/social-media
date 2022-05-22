import React from 'react'
import {
  ArrowBendUpLeft,
  DotsThreeOutlineVertical,
  Smiley,
} from 'phosphor-react'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import UserAvatar from '@/public/images/user-avatar.webp'
import { Tooltip } from '@/components/Tooltip'

const OtherChat = () => {
  return (
    <div className="group mb-4 flex items-end last:mb-0">
      <Avatar
        size={32}
        src={UserAvatar.src}
        alt="user avatar"
        className="mb-0.5 mr-2"
      />
      <div className="flex items-center">
        <Tooltip direction="right" message="21:52">
          <div className="relative rounded-md bg-gray-100 p-2 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quas exercitationem vel aut doloribus hic! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Deleniti optio, ratione dolorum
            delectus dolorem impedit saepe sapiente adipisci enim ab?
          </div>
        </Tooltip>
        <div className="invisible ml-2 flex flex-shrink-0 flex-row-reverse items-center opacity-0 group-hover:visible group-hover:opacity-100">
          <Button
            color="neutral"
            variant="text"
            size="xs"
            rounded="full"
            square
          >
            <DotsThreeOutlineVertical size={16} weight="fill" />
          </Button>
          <Button
            color="neutral"
            variant="text"
            size="xs"
            rounded="full"
            square
          >
            <ArrowBendUpLeft size={16} weight="fill" />
          </Button>
          <Button
            color="neutral"
            variant="text"
            size="xs"
            rounded="full"
            square
          >
            <Smiley size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OtherChat
