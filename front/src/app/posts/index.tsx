import React from 'react';
import PostedByDetails from './components/postedByDetails';
import PostLayout from './components/postLayout';
import { loremTesting, sampHtml } from '../../constants/testingVars';
import PostImageContent from './components/postImageContent';
import PostTextContent from './components/postTextContent';
import ReactionIcons from './components/reactionIcons';
import Parser from 'html-react-parser';
import PostTime from './components/postTime';
import { PostFormValues } from '@/types/posts/postTypes';
import _ from 'lodash'

import PostPrivacyView from './components/postPrivacyView';

type Props = { data: PostFormValues };

const PostIndex = ({ data }: Props) => {
  // const PostIndex = ({ content, attachments, created_at, createdBy, createdByDepartment}: Props) => {


  return (
    <div className="pt-3">
      <PostLayout>

        <PostedByDetails firstName={_.get(data, 'createdBy.firstName')} lastName={_.get(data, 'createdBy.lastName')} department={_.get(data, 'createdByDepartment.name')} />
        <div className='absolute top-[2.8rem] left-[4.2rem]'>
          <div className='flex gap-2'>
            <PostTime created_at={_.get(data, 'created_at')} />
            <PostPrivacyView privacy={data.privacy} />
          </div>


        </div>

        <PostTextContent content={_.get(data, 'content')} />
        {
          _.get(data, 'attachments') && _.get(data, 'attachments').length >= 1 && <PostImageContent />
        }


        <div>
          <div
            className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-bell-off mr-2"
            >
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
              <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
              <path d="M18 8a6 6 0 0 0-9.33-5"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
            Tag
          </div>
        </div>

        {/* <div className="border-b border-dashed border-gray-300 py-3"></div> */}
        {/* <ReactionIcons /> */}
      </PostLayout>
    </div>
  );
};

export default PostIndex;
