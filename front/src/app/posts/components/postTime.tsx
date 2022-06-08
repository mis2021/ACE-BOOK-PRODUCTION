import React from 'react';
type Props = {
  withTime?: boolean;
};

const PostTime = ({ withTime }: Props) => {
  //
  return (
    <div>
          
              <span className="text-[10px] text-body">
                Jan. 15, 2022 - 6:00 PM
              </span>
            
    </div>
  );
};

export default PostTime;
