import React, { useState, useEffect } from 'react'
import PostIndex from '@/app/posts';
import _ from 'lodash';
import { PostFormValues } from '@/types/posts/postTypes';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import LazyLoad from 'react-lazyload';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonLoader from '@/components/ui/loaders/skeleton-loader';
import { CircleCheckIcon } from '@/components/icons/circle-check-icon';
import { useModalState } from '@/components/ui/modal/modal.context';

type Props = {
  posts?: any;
  loading?: boolean;
  refetch?: any;
  countAll: number;
  hasNewPost?: boolean;
  currentPage?: number;
  type?: string;
  departmenId?: string;
  refetchQuery: object;
}

type StateType = {
  skip: number;
  hasMore: boolean;
  posts: any;
  postLength: number;
}

const postPerView = 3;

const initialState = {
  posts: [],
  skip: 0,
  hasMore: true,
  postLength: 0
}

const FeedPosts = ({ loading, posts, countAll, refetch, currentPage, departmenId, type, refetchQuery }: Props) => {

  const [state, setState] = useState<StateType>(initialState)
  const {
    isOpen
  } = useModalState();


  useEffect(() => {
    let plength = 3;
    if (currentPage == 0) {
      setState((p) => ({ ...p, posts: posts, postLength: plength, hasMore: true, skip: 0 }))
    } else {
      let newPost = _.concat(state.posts, posts)
      plength = newPost.length
      setState((p) => ({ ...p, posts: newPost, postLength: plength }))

    }
  }, [posts])

  const fetchMore = () => {
    setTimeout(() => {
      // if (refetchQuery) {
      //   refetch(refetchQuery)
      // } else {
      //   refetch()
      // }
      let nSkip = state.skip + postPerView;

      let fq: any = refetchQuery
      fq.skip = nSkip
      refetch(fq)

      // setState((p) => ({ ...p, skip: state.skip + postPerView}))
      setState((p) => ({
        ...p,
        skip: state.posts.length >= countAll ? 0 : nSkip,
        hasMore: currentPage == 0 ? true : (state.posts.length >= countAll ? false : true)
      }))
    }, 1000);
  }

  // console.log("fetching", {
  //   posts: posts,
  //   countAll: countAll,
  //   currentPage: currentPage,
  //   refetchQuery: refetchQuery,
  //   hasMore: state.hasMore,
  //   skip: state.skip
  // })
  // console.log("lenght",state.postLength)

  return (
    <div>
      {
        loading ?
          <Spinner showText={false} />
          :
          <>
            <div>
              <InfiniteScroll
                dataLength={state.posts.length}
                next={fetchMore}
                // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                inverse={false} //
                // isReverse={true}
                hasMore={state.hasMore}
                loader={<SkeletonLoader />}
                endMessage={
                  <div className='flex justify-center pt-5'>
                    <div>
                      <div className='flex justify-center'>
                        <div className='w-20  text-gray-400'>
                          <CircleCheckIcon />
                        </div>
                      </div>
                      <span className='text-gray-400' >  Your all caught up!</span>
                    </div>
                  </div>
                }
              >

                {
                  state.posts.length >= 1 && <>
                    {
                      state.posts.map((item: PostFormValues, index: number) => (
                        // <LazyLoad height={200} debounce={true} throttle={true}>
                        <PostIndex
                          index={index}
                          data={item}
                          tags={item.tags}
                        />
                        // </LazyLoad>
                      ))
                    }

                  </>
                }
              </InfiniteScroll>
            </div>
          </>
      }

    </div>
  )
}

export default FeedPosts