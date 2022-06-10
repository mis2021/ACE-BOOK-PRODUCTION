import React, { useEffect } from 'react'
import PostIndex from '@/app/posts';
import FeedHeader from './feedHeader';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/operations/posts/postQueries';
import _ from 'lodash';
import { PostFormValues } from '@/types/posts/postTypes';
import { useModalState } from '@/components/ui/modal/modal.context';
// import { useModalState } from "@components/ui/modal/modal.context";
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
type Props = {}

const DashboardIndex = (props: Props) => {

  const {
    isOpen
  } = useModalState();

  const { token, permissions, id, user } = getAuthCredentials();

  const { data: allPosts, refetch } = useQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });


  useEffect(() => {
    refetch()
  }, [!isOpen])


console.log("post data", _.get(allPosts, "posts.data"))
console.log("user", user)

  return (
    <div>
      <FeedHeader />

      {
        _.get(allPosts, "posts.data") && <>
          {
            _.orderBy(_.get(allPosts, "posts.data"), ['created_at', 'updated_at'], ['desc', 'asc']).map((item: PostFormValues) => (
              <PostIndex
                data={item}
                // content={item.content}
                // attachments={item.attachments}
                // created_at={item.created_at}
                // createdBy={item.createdBy}
              />
            ))
          }

        </>
      }

    </div>
  )
}

export default DashboardIndex