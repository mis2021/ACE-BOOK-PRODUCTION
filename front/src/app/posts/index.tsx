import React from 'react';
import PostedByDetails from './components/postedByDetails';
import PostLayout from './components/postLayout';
import PostImageContent from './components/postImageContent';
import PostTextContent from './components/postTextContent';
import ReactionIcons from './components/reactionIcons';
import Parser from 'html-react-parser';
import PostTime from './components/postTime';
import { PostFormValues } from '@/types/posts/postTypes';
import _ from 'lodash'
import PostPrivacyView from './components/postPrivacyView';
import PostTagIcon from '@/components/tags/tagIcon';
import GenComments from '../comments';
import PostTagContainer from './components/postTagContainer';
import PostFileContent from './components/postFileContent';
import PostAttachments from './components/attachments';

type Props = { data: PostFormValues, tags: any };
export const PostContext = React.createContext({})

const PostIndex = ({ data, tags }: Props) => {
  // const PostIndex = ({ content, attachments, created_at, createdBy, createdByDepartment}: Props) => {
  const postValue: PostFormValues = data
  return (
    <div className="pt-3 ">
      <PostContext.Provider value={postValue} >
        <PostLayout>
          <PostedByDetails firstName={_.get(data, 'createdBy.firstName')} lastName={_.get(data, 'createdBy.lastName')} department={_.get(data, 'createdByDepartment.name')} />
          <div className='absolute top-[2.8rem] left-[4.2rem]'>
            <div className='flex gap-2'>
              <PostTime created_at={_.get(data, 'created_at')} />
              <PostPrivacyView privacy={data.privacy} />
            </div>
          </div>
          <PostTextContent content={_.get(data, 'content')} />
         
          <PostAttachments attachments={_.get(data, 'attachments')}/>
          
          <PostTagContainer tags={tags} />
          <GenComments />

          {/* <PostTagIcon identifier='20' name='Departments'/> */}

          {/* <div className="border-b border-dashed border-gray-300 py-3"></div> */}
          {/* <ReactionIcons /> */}
        </PostLayout>
      </PostContext.Provider>
    </div>
  );
};

export default PostIndex;
