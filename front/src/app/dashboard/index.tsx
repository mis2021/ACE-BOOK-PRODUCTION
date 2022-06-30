import React, { useEffect, useMemo, useState } from 'react'
import PostIndex from '@/app/posts';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/operations/posts/postQueries';
import _ from 'lodash';
import { PostFormValues } from '@/types/posts/postTypes';
import { useModalState } from '@/components/ui/modal/modal.context';
// import { useModalState } from "@components/ui/modal/modal.context";

import PostTagIcon from '@/components/tags/tagIcon';
import { addPostTagLayout } from '@/services/posts';
import FeedHeader from '../common/feed/header';
import FeedPosts from '../common/feed/feedPosts';
import FeedPostLayout from '../common/feed/feedLayout';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { PostContextRd } from '@/reducers/posts/postContextRd';

type Props = {
  departmentId?: string;
}

type StateType = {
  posts: any[];
  hasNewPost?: boolean;
}

const initialState = {
  posts: [],
  hasNewPost: true
}

const DashboardIndex = (props: Props) => {
  const [statePostRd, dispatchPostRd] = React.useContext<any>(PostContextRd)
  const [state, setState] = useState<StateType>(initialState)

  const {
    isOpen
  } = useModalState();

  const { data: allPosts, refetch, loading: postLoading } = useQuery(GET_POSTS, {
    variables: {
      departmentId: null,
      type: null,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  const assignPost = () => {
    let allPostsTemp = _.cloneDeep(_.orderBy(_.get(allPosts, "posts.data"), ['created_at', 'updated_at'], ['desc', 'asc']))
    allPostsTemp = addPostTagLayout(allPostsTemp)
    setState((p) => ({ ...p, posts: allPostsTemp }))
  }

  useEffect(() => {
    assignPost()
  }, [allPosts])

  useEffect(() => {
    refetch({
      departmentId: null,
      type: null,
      skip: 0
    })
    assignPost()

    // setTimeout(() => {
    //   setState((p) => ({ ...p, hasNewPost: true }))
    //   setTimeout(() => {
    //     setState((p) => ({ ...p, hasNewPost: false }))
    //   }, 1000);
    // }, 500);

  }, [!statePostRd.active])

 

  return (
    <div>
      <FeedPostLayout>
        <FeedHeader />
        {/* {
          state.hasNewPost ?

            <div className='relative top-0'>
              <Spinner showText={false} />
            </div> 


            : */}
            <FeedPosts posts={state.posts} loading={postLoading} refetch={refetch} countAll={_.get(allPosts, "posts.paginatorInfo.count")} currentPage={_.get(allPosts, "posts.paginatorInfo.currentPage")} />
        {/* } */}
      </FeedPostLayout>
    </div>
  )
}

export default DashboardIndex