import React from 'react'
import MyFeed from './MyFeed'
import Intro from './Intro'
import BasicInfo from './BasicInfo'
import { Main, WidgetSidebar } from '@/components/Layout'

const Profile = () => {
  return (
    <div className="flex flex-1 flex-col items-stretch">
      <BasicInfo />
      <Main>
        <div className="flex flex-1 flex-col md:flex-row">
          <Intro />
          <div className="mr-0 flex-1 md:ml-layout xl:mr-layout">
            <MyFeed />
          </div>
        </div>
        <WidgetSidebar />
      </Main>
    </div>
  )
}

export default Profile
