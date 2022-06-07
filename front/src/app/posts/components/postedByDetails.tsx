import React from 'react';
import Avatar from '@/components/ui/avatar';
type Props = {
  withTime?: boolean;
};

const PostedByDetails = ({ withTime }: Props) => {
  //
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
            <span className="text-sm font-semibold text-heading md:text-base">
              Jacky Avenido
            </span>
            <span className="text-xl text-gray-400">|</span>
            <span className="text-xs text-body md:text-sm">MIS</span>
          </div>
          {
            withTime ? 
            <div className='absolute top-[2.6rem]'>
              <span className="text-[10px] text-body">
                Jan. 15, 2022 - 6:00 PM
              </span>
            </div>
            : <></>
          }

        </div>
      </div>
    </div>
  );
};

export default PostedByDetails;
