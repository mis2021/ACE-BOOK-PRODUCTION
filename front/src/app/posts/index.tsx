import React from 'react';
import PostedByDetails from './components/postedByDetails';
import PostLayout from './components/postLayout';
import { loremTesting } from '../../constants/testingVars';

type Props = {};

const PostIndex = () => {
  return (
    <div className='pt-3'>
      <PostLayout>
        <PostedByDetails />
        {loremTesting}
      </PostLayout>
    </div>
  );
};

export default PostIndex;
