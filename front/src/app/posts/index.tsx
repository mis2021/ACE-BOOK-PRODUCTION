import React from 'react';
import PostedByDetails from './components/postedByDetails';
import PostLayout from './components/postLayout';
import { loremTesting } from '../../constants/testingVars';
import ShowMoreText from 'react-show-more-text';
type Props = {};

const PostIndex = () => {
  return (
    <div className="pt-3">
      <PostLayout>
        <PostedByDetails />
        <div className='pt-2'>
          <ShowMoreText
            /* Default options */
            lines={8}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="text-body italic text-sm"
            expanded={false}
            // width={280}
            truncatedEndingComponent={'... '}
          >
            {loremTesting}
            {/* Naa leak sa gas duol sa admitting. Padung na mo buto. Please run.
            Thank you... */}
          </ShowMoreText>
        </div>
      </PostLayout>
    </div>
  );
};

export default PostIndex;
