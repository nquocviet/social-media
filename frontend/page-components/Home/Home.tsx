import React from 'react'
import { FriendList, Main, WidgetSidebar } from '@/components/Layout'
import NewsFeed from './NewsFeed'

const Home = () => {
  return (
    <>
      <Main>
        <div className="mr-layout flex-1">
          <NewsFeed />
        </div>
        <WidgetSidebar />
      </Main>
      <FriendList />
    </>
  )
}

export default Home
