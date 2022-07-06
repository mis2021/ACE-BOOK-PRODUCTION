import { VerticalDotsIcon } from '@/components/icons/vertical-dots'
import React, { useState } from 'react'
import { getAuthCredentials } from '@/utils/auth-utils';
import _ from 'lodash';
type Props = {
    clicked?:any;
    index?: number;
    postUserId?: string;
}

const PostOptions = ({clicked, index, postUserId}: Props) => {
const { user } = getAuthCredentials();

    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='cursor-pointer text-slate-400'> <div key={"dots"+index} onClick={e => setOpen(!open)}><VerticalDotsIcon /></div></div>
            {open ?
                <div onMouseLeave={e => setOpen(!open)} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md z-50 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">

                    <div className="py-1" role="none">
                       {_.get(user, '_id') === postUserId ?  <span onClick={e=>clicked("edit")} className="text-gray-700 block px-4 py-1 text-sm w-full cursor-pointer" role="menuitem">Edit</span> : <></>}
                        <span onClick={e=>clicked("ticket")} className="text-gray-700 block px-4 py-1 text-sm w-full cursor-pointer" role="menuitem" >Create Ticket</span>
                    </div>
                </div>
                : <></>
            }
        </div>
    )
}

export default PostOptions