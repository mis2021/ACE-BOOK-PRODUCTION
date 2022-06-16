import React, { useEffect, useState } from 'react'
import PostIndex from '@/app/posts';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/operations/posts/postQueries';
import _ from 'lodash';
import { PostFormValues } from '@/types/posts/postTypes';
import { useModalState } from '@/components/ui/modal/modal.context';
import { addPostTagLayout } from '@/services/posts';
import FeedHeader from '@/app/common/feed/header';
import Spinner from '@/components/ui/loaders/spinner/spinner';
type Props = {
  posts?: any;
  loading?: boolean;
}

const FeedPosts = (props: Props) => {

  return (
    <div>
      {
        props.loading ?
          <Spinner showText={false} />
          :
          <>
            {
              props.posts && <>
                {
                  props.posts.map((item: PostFormValues) => (
                    <PostIndex
                      data={item}
                      tags={item.tags}
                    />
                  ))
                }

              </>
            }
          </>
      }

    </div>
  )
}

export default FeedPosts