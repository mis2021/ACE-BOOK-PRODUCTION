import React from 'react';
import PostedByDetails from './components/postedByDetails';
import PostLayout from './components/postLayout';
import { loremTesting, sampHtml } from '../../constants/testingVars';
import ShowMoreText from 'react-show-more-text';
import PostImageContent from './components/postImageContent';
import PostTextContent from './components/postTextContent';
import ReactionIcons from './components/reactionIcons';
import Parser from 'html-react-parser';
import PostTime from './components/postTime';

type Props = {
  content: any;
  attachments?: any;

};

const PostIndex = ({ content, attachments }: Props) => {
  return (
    <div className="pt-3">
      <PostLayout>

        <PostedByDetails withTime={true} />
        <div className='absolute top-[2.6rem] left-[4.3rem]'>
          <PostTime />
        </div>

        <PostTextContent content={content} />
        {
          attachments?.length >= 1 && <PostImageContent />
        }
        
       
        {/* <div className="border-b border-dashed border-gray-300 py-3"></div> */}
        <ReactionIcons />
      </PostLayout>
    </div>
  );
};

export default PostIndex;
