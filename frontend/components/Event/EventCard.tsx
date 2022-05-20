import React from 'react'
import { AvatarGroup } from '../AvatarGroup'
import { Divider } from '../Divider'

const EventCard = () => {
  return (
    <div className="mb-4 flex flex-col items-stretch rounded-lg bg-gray-50 p-2 shadow shadow-gray-200 last:mb-0">
      <div className="flex items-start">
        <div className="mr-4 h-10 w-10 flex-shrink-0 rounded bg-gray-200"></div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Graduation Ceremony</h2>
          <p className="text-sm text-gray-400 line-clamp-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            tempora quis error fugit quidem optio. Fugit esse aut ut architecto.
          </p>
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">8 seen</span>
        <AvatarGroup />
      </div>
    </div>
  )
}

export default EventCard
