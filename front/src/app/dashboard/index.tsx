import React, { useEffect, useMemo, useState } from 'react'
import PostIndex from '@/app/posts';
import FeedHeader from './feedHeader';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/operations/posts/postQueries';
import _ from 'lodash';
import { PostFormValues } from '@/types/posts/postTypes';
import { useModalState } from '@/components/ui/modal/modal.context';
// import { useModalState } from "@components/ui/modal/modal.context";
import { getAuthCredentials, isAuthenticated } from "@utils/auth-utils";
import PostTagIcon from '@/components/tags/tagIcon';
type Props = {}

type StateType = {
  posts: any[]
}

const initialState = {
  posts: []
}

const DashboardIndex = (props: Props) => {

  const [state, setState] = useState<StateType>(initialState)

  const {
    isOpen
  } = useModalState();

  const { token, permissions, id, user } = getAuthCredentials();

  const { data: allPosts, refetch } = useQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  const assignPost = () => {

    let allPostsTemp = _.cloneDeep(_.orderBy(_.get(allPosts, "posts.data"), ['created_at', 'updated_at'], ['desc', 'asc']))

    allPostsTemp = allPostsTemp.map((item) => {
      let tags = [];
      let tagsRaw = [];

      if (item.taggedDepartments) {
        let name: string;
        if (item.taggedDepartments.length > 1) {
          name = item.taggedDepartments[0].name + ' and other ' + (item.taggedDepartments.length - 1) + ((item.taggedDepartments.length - 1) > 1 ? ' Departments': ' Department');
        }else{
          name = item.taggedDepartments[0].name;
        }

        tagsRaw = item.taggedDepartments.map((i:any)=>{
          return i.name
        })


        tags.push({
          content: <PostTagIcon identifier={item.taggedDepartments.length} name={name} />,
          contentRaw: tagsRaw
        })
      }

      item.tags = tags

      return item;

    })

    setState((p) => ({ ...p, posts: allPostsTemp }))
  }

  useEffect(() => {
    assignPost()
  }, [allPosts])

  useEffect(() => {

    refetch()
    assignPost()
  }, [!isOpen])







  // console.log("post data", _.get(allPosts, "posts.data"))
  // console.log("user", user)
  console.log("state", state.posts)

  return (
    <div>
      <FeedHeader />

      {
        _.get(allPosts, "posts.data") && <>
          {
            state.posts.map((item: PostFormValues) => (
              <PostIndex
                data={item}
                tags={item.tags}

              // tags={[{
              //   count: item.taggedDepartments && item.taggedDepartments.length,
              //   content: <PostTagIcon identifier={item.taggedDepartments && item.taggedDepartments.length} name='Departments' />
              // }]}
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