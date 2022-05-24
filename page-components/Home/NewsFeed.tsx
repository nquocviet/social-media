import React from 'react'
import { CreatePostArea } from '@/components/CreatePost'
import { PostCard } from '@/components/Post'

const NewsFeed = () => {
  return (
    <div className="flex flex-col items-stretch">
      <CreatePostArea />
      {[...Array(5)].map((_, index) => (
        <PostCard key={index} />
      ))}
    </div>
  )
}

export default NewsFeed
