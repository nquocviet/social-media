import React from 'react'
import { FriendList, Main, WidgetSidebar } from '@/components/Layout'
import NewsFeed from './NewsFeed'

const Home = () => {
  return (
    <>
      <Main>
        <div className="mr-0 flex-1 xl:mr-layout">
          <NewsFeed />
        </div>
        <WidgetSidebar />
      </Main>
      <FriendList />
    </>
  )
}

export default Home
