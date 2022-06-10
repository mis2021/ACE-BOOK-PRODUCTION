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

type Props = {data:PostFormValues};

const PostIndex = ({data} : Props) => {
// const PostIndex = ({ content, attachments, created_at, createdBy, createdByDepartment}: Props) => {


  return (
    <div className="pt-3">
      <PostLayout>

        <PostedByDetails firstName={_.get(data,'createdBy.firstName')}  lastName={_.get(data,'createdBy.lastName')} department={_.get(data,'createdByDepartment.name')} />
        <div className='absolute top-[2.6rem] left-[4.2rem]'>
          <PostTime created_at={_.get(data,'created_at')}/>
        </div>

        <PostTextContent content={_.get(data,'content')} />
        {
         _.get(data,'attachments') && _.get(data,'attachments').length >= 1 && <PostImageContent />
        }
        
       
        {/* <div className="border-b border-dashed border-gray-300 py-3"></div> */}
        {/* <ReactionIcons /> */}
      </PostLayout>
    </div>
  );
};

export default PostIndex;
