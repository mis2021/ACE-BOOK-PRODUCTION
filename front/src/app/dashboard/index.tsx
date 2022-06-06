import React from 'react'
import PostIndex from '@/app/posts';
import FeedHeader from './feedHeader';
type Props = {}

const DashboardIndex = (props: Props) => {
  return (
    <div>
      <FeedHeader />
      <PostIndex/>
      <PostIndex/>
    </div>
  )
}

export default DashboardIndex