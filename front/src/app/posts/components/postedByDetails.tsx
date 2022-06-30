import React from 'react';
import Avatar from '@/components/ui/avatar';
import _ from 'lodash';
type Props = {
  firstName?: any;
  lastName?: any;
  department?: any;
};

const PostedByDetails = ({firstName, lastName, department}: Props) => {
 
  return (
    <div>
      <div className="mb-2 flex items-center space-x-3">
        <Avatar
          src={'/_next/static/media/avatar.c9441dc8.svg'}
          title="user name"
          className="h-10 w-10"
        />
        <div>
          <div>
            <span className="text-sm font-semibold text-heading md:text-base capitalize">
             {firstName} {lastName}
            </span>
            <span className="text-xl text-gray-400">|</span>
            <span className="text-xs text-body md:text-sm">{department}</span>
          </div>
          {/* {
            withTime ? 
            <div className='absolute top-[2.6rem]'>
              <span className="text-[10px] text-body">
                Jan. 15, 2022 - 6:00 PM
              </span>
            </div>
            : <></>
          } */}

        </div>
      </div>
    </div>
  );
};

export default PostedByDetails;
