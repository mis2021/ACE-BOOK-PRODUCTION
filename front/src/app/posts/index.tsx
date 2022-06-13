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
import PostTagIcon from '@/components/tags/tagIcon';
import { Popover } from '@headlessui/react';
import PopoverDetails from '@/components/ui/popover/popoverDetails';
import { Tooltip } from '@/components/ui/tooltip/toolTip'
import { useModalAction } from '@/components/ui/modal/modal.context';

type Props = { data: PostFormValues, tags: any };

const PostIndex = ({ data, tags }: Props) => {
  // const PostIndex = ({ content, attachments, created_at, createdBy, createdByDepartment}: Props) => {
  const { openModal } = useModalAction();
  function handleProductQuickView(contents : any) {

    let data = {
      contents: contents,
      removeClose: true
    }
    return openModal('TAG_MODAL', data);
    // return openModal('POST_FORM', "FDS");
  }

  return (
    <div className="pt-3 ">
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


        {
          <div className='flex gap-2'>
            {tags.map((item: any) => (

              <span onClick={e=>handleProductQuickView(item.contentRaw)}  >{item.content}</span>

            ))}
          </div>
        }








        {/* <PostTagIcon identifier='20' name='Departments'/> */}


        {/* <div className="border-b border-dashed border-gray-300 py-3"></div> */}
        {/* <ReactionIcons /> */}
      </PostLayout>
    </div>
  );
};

export default PostIndex;
