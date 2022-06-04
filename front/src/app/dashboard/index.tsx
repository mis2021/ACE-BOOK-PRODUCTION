import React from 'react'
import PostIndex from '@/app/posts';
type Props = {}

const DashboardIndex = (props: Props) => {
  return (
    <div>
      <PostIndex/>
      <PostIndex/>
    </div>
  )
}

export default DashboardIndex