import React from 'react';
import { loremTesting } from '@constants/testingVars';
import ShowMoreText from 'react-show-more-text';

type Props = {
  content: any
};

const PostTextContent = ({content}: Props) => {
  return (
    <div className="pt-2">
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
        {content}
      </ShowMoreText>
    </div>
  );
};

export default PostTextContent;
