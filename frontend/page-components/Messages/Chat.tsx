import React from 'react'
import { Button } from '@/components/Button'
import {
  ArrowBendUpLeft,
  DotsThreeOutlineVertical,
  Smiley,
} from 'phosphor-react'
import { Tooltip } from '@/components/Tooltip'

const Chat = () => {
  return (
    <div className="group relative mb-4 flex flex-row-reverse items-end last:mb-0">
      <div className="flex flex-row-reverse items-center">
        <Tooltip direction="left" message="08:58">
          <div className="relative rounded-md bg-primary-500 p-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quas exercitationem vel aut doloribus hic! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Deleniti optio, ratione dolorum
            delectus dolorem impedit saepe sapiente adipisci enim ab?
          </div>
        </Tooltip>
        <div className="invisible mr-2 flex flex-shrink-0 items-center opacity-0 group-hover:visible group-hover:opacity-100">
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

export default Chat
