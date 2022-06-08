import React from 'react'
import PostIndex from '@/app/posts';
import FeedHeader from './feedHeader';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/operations/posts/postQueries';
import _ from 'lodash';
import { PostFormValues } from '@/types/posts/postTypes';
type Props = {}

const DashboardIndex = (props: Props) => {

  const { data: allPosts, refetch } = useQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  console.log("allPosts", _.get(allPosts, "posts.data"))

  return (
    <div>
      <FeedHeader />

      {
        _.get(allPosts, "posts.data") && <>
          {
            _.get(allPosts, "posts.data").map((item: PostFormValues) => (
              <PostIndex content={item.content} attachments={item.attachments} />
            ))
          }

        </>
      }

    </div>
  )
}

export default DashboardIndex